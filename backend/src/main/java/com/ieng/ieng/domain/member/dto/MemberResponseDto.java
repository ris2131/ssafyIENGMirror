package com.ieng.ieng.domain.member.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ieng.ieng.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MemberResponseDto {

    private String nickname;
    @JsonProperty("username")
    private String email;
    public MemberResponseDto(Member entity){
        this.nickname = entity.getNickname();
        this.email = entity.getEmail();
    }
}
