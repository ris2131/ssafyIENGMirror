package com.ieng.ieng.domain.member.controller;

import com.ieng.ieng.domain.member.dto.MemberRequestDto;
import com.ieng.ieng.domain.member.dto.MemberResponseDto;
import com.ieng.ieng.domain.member.dto.MemberUpdateRequestDto;
import com.ieng.ieng.domain.member.service.MemberService;
import com.ieng.ieng.global.jwt.JwtService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtService jwtService;
    final static Logger logger = LogManager.getLogger(MemberController.class);

    @PostMapping()
    public ResponseEntity<?> createMember(@RequestBody MemberRequestDto memberRequestDto){
        logger.debug("api/sign-up");
        String email = memberRequestDto.getEmail();

        String accessToken = jwtService.createAccessToken(email);
        String refreshToken = jwtService.createRefreshToken();

        //HttpHeaders headers = loginService.createTokenHeader(accessToken, refreshToken);

        MemberResponseDto memberResponseDto = memberService.createMember(memberRequestDto, refreshToken);
        logger.debug("api/sign-up : done");
        //return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(CommonResponse.createSuccess("회원가입이 완료되었습니다.", memberResponseDto));
        return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.createSuccess("회원가입이 완료되었습니다.", memberResponseDto));
    }
    @PutMapping()
    public ResponseEntity<?> updateMemberInfo(HttpServletRequest request, @RequestBody MemberUpdateRequestDto memberUpdateRequestDto){
        String email = (String) request.getAttribute("email");

        MemberResponseDto memberResponseDto = memberService.updateMemberInfo(email, memberUpdateRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.createSuccess("회원정보 수정이 완료되었습니다.",memberResponseDto));
    }
}
