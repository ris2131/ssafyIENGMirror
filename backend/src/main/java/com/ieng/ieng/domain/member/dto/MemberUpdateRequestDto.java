package com.ieng.ieng.domain.member.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ieng.ieng.domain.member.entity.Member;
import lombok.Getter;

import java.util.Date;

@Getter
public class MemberUpdateRequestDto {
    private String nickname;
    @JsonProperty("birth_YMD")
    private Date memberYMD;
    @JsonProperty("cur_password")
    private String curPassword;
    @JsonProperty("new_password")
    private String newPassword;


    public Member toEntity(){
        return Member.builder()
                .nickname(this.nickname)
                .build();
    }
}
