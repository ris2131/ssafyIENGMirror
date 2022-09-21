package com.ieng.ieng.domain.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Table(name = "MEMBERS")
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_SEQ")
    private Long memberSequence;

    @Column(name = "EMAIL", unique = true, nullable = false)
    private String email;
    @Column(name = "NICKNAME", unique = true, nullable = false)
    private String nickname;

    @Column(name = "YMD", nullable = false)
    private Date memberYMD;

    @Column(name = "PROVIDER", nullable = false)
    private String provider;

    @Column(name = "PICTURE_PATH"/*, nullable = false*/)//test
    private String picturePath;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "REFRESH_TOKEN", nullable = false)
    private String refreshToken;

    /*@OneToMany(mappedBy = "member", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JsonManagedReference
    @ToString.Exclude
    private List<Ranking> rankings;*/

    @Builder
    public Member(Long memberSequence, String nickname, String email, Date memberYMD, String provider,String picturePath, String password,  String refreshToken){
        this.memberSequence = memberSequence;
        this.nickname = nickname;
        this.email = email;
        this.memberYMD=memberYMD;
        this.provider = provider;
        this.picturePath=picturePath;
        this.password=password;
        this.refreshToken = refreshToken;
    }
}
