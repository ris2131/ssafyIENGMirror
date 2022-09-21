package com.ieng.ieng.domain.login.controller;

import com.ieng.ieng.domain.login.dto.LoginRequestDto;
import com.ieng.ieng.domain.login.service.LoginService;
import com.ieng.ieng.domain.member.dto.MemberInfoResponseDto;
import com.ieng.ieng.domain.member.service.MemberService;
import com.ieng.ieng.global.exception.NoExistMemberException;
import com.ieng.ieng.global.jwt.JwtService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;
    private final MemberService memberService;
    private final JwtService jwtService;

    final static Logger logger = LogManager.getLogger(LoginController.class);
    @GetMapping
    public ResponseEntity<?> getLocalLogin(@RequestBody LoginRequestDto loginRequestDto){
        try {
            String email = loginRequestDto.getEmail();
            logger.debug("email : " + email);
            String accessToken = jwtService.createAccessToken(email);
            String refreshToken = jwtService.createRefreshToken();
            HttpHeaders headers = loginService.createTokenHeader(accessToken, refreshToken);
            MemberInfoResponseDto loginResponseDto = memberService.getMemberInfo(email);

            return ResponseEntity.status(HttpStatus.OK).headers(headers).body(CommonResponse.createSuccess("로그인 성공적으로 완료 되었습니다.", loginResponseDto));
        }catch(NoExistMemberException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(CommonResponse.createSuccess("로그인 실패",null));
        }
    }
}
