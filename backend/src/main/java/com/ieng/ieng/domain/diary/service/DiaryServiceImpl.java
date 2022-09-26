package com.ieng.ieng.domain.diary.service;

import com.ieng.ieng.domain.diary.dto.DiaryDeleteDto;
import com.ieng.ieng.domain.diary.dto.DiaryGetResponseDto;
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

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService{

    private final MemberRepository memberRepository;
    private final DiaryRepository diaryRepository;

    private final DiaryKeywordRepository diaryKeywordRepository;


    @Override
    public DiaryGetResponseDto diaryDetail(String email, String date){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        Diary diary = diaryRepository.findDiaryByMemberAndDiaryDTTM(member, date);
        DiaryGetResponseDto diaryGetResponseDto  = DiaryGetResponseDto.builder()
                .diarySequence(diary.getDiarySequence())
                .memberSequence(member.getMemberSequence())
                .diaryPicturePath(diary.getDiaryPicturePath())
                .diaryContent(diary.getDiaryContent())
                .diaryEmotion(diary.getDiaryEmotion())
                .diaryDTTM(diary.getDiaryDTTM())
                .build();
        return diaryGetResponseDto;
    }

    @Override
    public void createDiary(String email, DiaryRequestDto diaryRequestDto){

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        Diary diary = Diary.builder()
                .member(member)
                .diaryPicturePath(diaryRequestDto.getPicturePath())
                .diaryContent(diaryRequestDto.getContent())
                .diaryEmotion(diaryRequestDto.getEmotion())
                .diaryDTTM(date.format(formatter))
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

    @Override
    public void deleteDiary(String email, DiaryDeleteDto diaryDeleteDto){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        Diary diary = diaryRepository.findDiaryByMemberAndDiaryDTTM(member, diaryDeleteDto.getDate());
        diaryRepository.delete((diary));

    }

}
