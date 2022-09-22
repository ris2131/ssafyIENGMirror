package com.ieng.ieng.domain.member.service;

import com.ieng.ieng.domain.member.dto.*;
import com.ieng.ieng.domain.member.entity.Member;
import com.ieng.ieng.domain.member.repository.MemberRepository;
import com.ieng.ieng.global.exception.DuplicateNicknameException;
import com.ieng.ieng.global.exception.ExistNicknameException;
import com.ieng.ieng.global.exception.NoExistMemberException;
import com.ieng.ieng.global.exception.NoMatchCurPasswordException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository;

    // 회원정보 확인
    @Override
    public MemberInfoResponseDto getMemberInfo(String email) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        MemberInfoResponseDto memberInfoResponseDto = new MemberInfoResponseDto(member);

        return memberInfoResponseDto;
    }

    // 회원가입
    @Override
    public MemberResponseDto createMember(MemberRequestDto memberRequestDto, String refreshToken){
        try {
            memberRequestDto.updateRefreshToken(refreshToken);
            Member member = memberRepository.save(memberRequestDto.toEntity());

            MemberResponseDto memberResponseDto = new MemberResponseDto(member);
            return memberResponseDto;
        }catch(DataIntegrityViolationException e){
            throw new DuplicateNicknameException("닉네임 중복 입니다.");
        }
    }

    // 회원정보 수정
    @Override
    public MemberResponseDto updateMemberInfo(String email, MemberUpdateInfoRequestDto memberUpdateRequestDto){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));

        try{
            member.updateInfo(memberUpdateRequestDto);
            memberRepository.save(member);
            MemberResponseDto memberResponseDto = new MemberResponseDto(member);
            return memberResponseDto;
        }catch (DataIntegrityViolationException e){
            throw new ExistNicknameException("존재하는 닉네임입니다.");
        }
    }
    // 회원정보 비밀번호 수정
    @Override
    public void updateMemberPassword(String email, MemberUpdatePasswordRequestDto memberUpdatePasswordRequestDto){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        if(!member.getPassword().equals(memberUpdatePasswordRequestDto.getCurPassword())){
            throw new NoMatchCurPasswordException("현재 비밀번호가 맞지 않습니다.");
        }
        member.updatePassword(memberUpdatePasswordRequestDto);
        memberRepository.save(member);
        return ;

    }

    /*// 회원탈퇴
    @Override
    public void deleteMember(String email){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        memberRepository.delete(member);
    }*/

    @Override
    public void updateRefreshToken(String email, String refreshToken) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        member.updateRefreshToken(refreshToken);
        memberRepository.save(member);
    }
}
