package com.ieng.ieng.domain.member.dto;

import com.ieng.ieng.domain.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class MemberInfoResponseDto {

    private String nickname;
    private String email;
    @Builder
    public MemberInfoResponseDto(Member entity){
        this.nickname = entity.getNickname();
        this.email = entity.getEmail();
    }
}
