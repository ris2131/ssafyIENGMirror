package com.ieng.ieng.domain.member.service;

import com.ieng.ieng.domain.member.dto.MemberRequestDto;
import com.ieng.ieng.domain.member.dto.MemberResponseDto;

public interface MemberService {
    MemberResponseDto createMember(MemberRequestDto memberRequestDto, String refreshToken);
    //MemberResponseDto updateMemberInfo(String email, MemberUpdateRequestDto memberUpdateRequestDto);
    //MemberInfoResponseDto getMemberInfo(String email);
    //void deleteMember(String email);
    //void updateRefreshToken(String email, String refreshToken);
}
