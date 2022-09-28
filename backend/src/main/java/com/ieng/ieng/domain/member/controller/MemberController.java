package com.ieng.ieng.domain.member.controller;

import com.ieng.ieng.domain.login.service.LoginService;
import com.ieng.ieng.domain.member.dto.*;
import com.ieng.ieng.domain.member.service.MemberGoogleService;
import com.ieng.ieng.domain.member.service.MemberService;
import com.ieng.ieng.global.exception.DuplicateNicknameException;
import com.ieng.ieng.global.jwt.JwtService;
import com.ieng.ieng.global.response.CommonResponse;
import com.ieng.ieng.global.s3.S3UploaderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberGoogleService memberGoogleService;
    private final LoginService loginService;
    private final JwtService jwtService;
    private final S3UploaderServiceImpl s3UploaderService;

    final static Logger logger = LogManager.getLogger(MemberController.class);
    @GetMapping()
    public ResponseEntity<?> getMember(HttpServletRequest request){
        String email = (String) request.getAttribute("email");
        MemberInfoResponseDto memberInfoResponseDto = memberService.getMemberInfo(email);
        return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.createSuccess("회원정보 확인 완료.", memberInfoResponseDto));
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> createMember(@RequestPart("profile_image")MultipartFile multipartFile, @RequestPart("data") MemberRequestDto memberRequestDto){
        try {
            logger.debug("api/sign-up");
            String email = memberRequestDto.getEmail();

            String accessToken = jwtService.createAccessToken(email);
            String refreshToken = jwtService.createRefreshToken();

            HttpHeaders headers = loginService.createTokenHeader(accessToken, refreshToken);

            MemberResponseDto memberResponseDto = memberService.createMember(memberRequestDto, refreshToken);
            logger.debug("done : createMember");
            memberService.uploadProfile(multipartFile , email);
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(CommonResponse.createSuccess("회원가입이 완료되었습니다.", memberResponseDto));
        } catch (DuplicateNicknameException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(CommonResponse.createError("닉네임 중복 회원 가입 불가."));
        }

    }
    @PostMapping("google-sign-up")
    public ResponseEntity<?> createGoogleMember(@RequestBody MemberGoogleRequestDto memberGoogleRequestDto){
        try {
            logger.debug("api/google-sign-up");

            String refreshToken = jwtService.createRefreshToken();
            MemberResponseDto memberResponseDto = memberGoogleService.signUpOauthGoogle(memberGoogleRequestDto, refreshToken);
            String email = memberResponseDto.getEmail();
            String accessToken = jwtService.createAccessToken(email);

            HttpHeaders headers = loginService.createTokenHeader(accessToken, refreshToken);

            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(CommonResponse.createSuccess("구글 회원가입이 완료되었습니다.", memberResponseDto));
        }catch (DuplicateNicknameException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(CommonResponse.createError("닉네임 중복 회원 가입 불가."));
        }
    }
    @PutMapping("/info")
    public ResponseEntity<?> updateMemberInfo(HttpServletRequest request, @RequestBody MemberUpdateInfoRequestDto memberUpdateRequestDto){
        String email = (String) request.getAttribute("email");
        logger.debug("email:{}" , email);
        MemberResponseDto memberResponseDto = memberService.updateMemberInfo(email, memberUpdateRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("회원정보 수정이 완료되었습니다.",memberResponseDto));
    }
    @PutMapping("/password")
    public ResponseEntity<?> updateMemberPassword(HttpServletRequest request, @RequestBody MemberUpdatePasswordRequestDto memberUpdatePasswordRequestDto){
        String email = (String) request.getAttribute("email");
        logger.debug("email:{}" , email);
        memberService.updateMemberPassword(email, memberUpdatePasswordRequestDto);

        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("비밀번호 수정이 완료되었습니다.", null));
    }
    @DeleteMapping
    public ResponseEntity<?> deleteMember(HttpServletRequest request){
        String email = (String) request.getAttribute("email");
        logger.debug("email:{}" , email);
        memberService.deleteMember(email);

        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("회원탈퇴 완료되었습니다.", null));
    }
}
