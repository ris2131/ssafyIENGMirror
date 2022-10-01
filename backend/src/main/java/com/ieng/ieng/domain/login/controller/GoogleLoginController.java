package com.ieng.ieng.domain.login.controller;

import com.ieng.ieng.domain.login.dto.GoogleLoginRequestDto;
import com.ieng.ieng.domain.login.service.GoogleLoginService;
import com.ieng.ieng.domain.login.service.LoginService;
import com.ieng.ieng.domain.member.dto.MemberInfoResponseDto;
import com.ieng.ieng.domain.member.service.MemberService;
import com.ieng.ieng.global.exception.NoExistMemberException;
import com.ieng.ieng.global.exception.NoGoogleAuthorizeException;
import com.ieng.ieng.global.jwt.JwtService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/google-login")
@RequiredArgsConstructor
public class GoogleLoginController {

    private final GoogleLoginService googleLoginService;
    private final LoginService loginService;
    private final MemberService memberService;
    private final JwtService jwtService;
    @Value("${cloud.aws.s3.domain}")
    String s3Domain ;

    final static Logger logger = LogManager.getLogger(LoginController.class);
    @PostMapping
    public ResponseEntity<?> getGoogleLogin(@RequestBody GoogleLoginRequestDto googleLoginRequestDto){
        logger.debug("google controller: " + googleLoginRequestDto.getIdToken());
        try {

            MemberInfoResponseDto memberInfoResponseDto = googleLoginService.loginOAuthGoogle(googleLoginRequestDto);
            String email = memberInfoResponseDto.getEmail();
            logger.debug("google email : " + email);

            String accessToken = jwtService.createAccessToken(email);
            String refreshToken = jwtService.createRefreshToken();

            HttpHeaders headers = loginService.createTokenHeader(accessToken, refreshToken);
            memberService.updateRefreshToken(email, refreshToken);

            String picturePath = "user/"+email+"/profile/profile.jpg";
            memberInfoResponseDto.updatePicturePath(s3Domain + picturePath);

            return ResponseEntity.status(HttpStatus.OK).headers(headers).body(CommonResponse.createSuccess("로그인 성공적으로 완료 되었습니다.", memberInfoResponseDto));
        }catch(NoExistMemberException e){
            return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("첫 로그인 구글 인증 완료",null));
        }catch(NoGoogleAuthorizeException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(CommonResponse.createSuccess("구글 로그인 실패", null));
        }
    }
}
