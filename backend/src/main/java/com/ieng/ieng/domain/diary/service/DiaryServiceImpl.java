package com.ieng.ieng.domain.diary.service;

import com.ieng.ieng.domain.diary.dto.DiaryKeywordDto;
import com.ieng.ieng.domain.diary.dto.DiaryRequestDto;
import com.ieng.ieng.domain.diary.entity.Diary;
import com.ieng.ieng.domain.diary.entity.DiaryKeyword;
import com.ieng.ieng.domain.diary.repository.DiaryKeywordRepository;
import com.ieng.ieng.domain.diary.repository.DiaryRepository;
import com.ieng.ieng.domain.member.entity.Member;
import com.ieng.ieng.domain.member.repository.MemberRepository;
import com.ieng.ieng.global.exception.NoExistMemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService{

    private final MemberRepository memberRepository;
    private final DiaryRepository diaryRepository;

    private final DiaryKeywordRepository diaryKeywordRepository;

    @Override
    public void createDiary(String email, DiaryRequestDto diaryRequestDto){

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        Date now = new Date();
        Diary diary = Diary.builder()
                .member(member)
                .diaryPicturePath(diaryRequestDto.getPicturePath())
                .diaryContent(diaryRequestDto.getContent())
                .diaryEmotion(diaryRequestDto.getEmotion())
                .diaryDTTM(now)
                .build();
        diaryRepository.save(diary);
        List<DiaryKeywordDto> diaryKeywordList = diaryRequestDto.getDiaryKeywordList();
        for(DiaryKeywordDto diaryKeywordDto : diaryKeywordList){
            DiaryKeyword diaryKeyword = DiaryKeyword.builder()
                    .diaryKeyword(diaryKeywordDto.getKeyword())
                    .diary(diary)
                    .build();
            diaryKeywordRepository.save(diaryKeyword);
        }
        return;
    }

}
