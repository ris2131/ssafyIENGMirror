package com.ieng.ieng.domain.diary.service;

import com.ieng.ieng.domain.diary.dto.DiaryKeywordDto;
import com.ieng.ieng.domain.diary.dto.DiaryRequestDto;
import com.ieng.ieng.domain.diary.entity.Diary;
import com.ieng.ieng.domain.diary.entity.DiaryKeyword;
import com.ieng.ieng.domain.diary.repository.DiaryKeywordRepository;
import com.ieng.ieng.domain.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService{


    private final DiaryRepository diaryRepository;

    private final DiaryKeywordRepository diaryKeywordRepository;

    @Override
    public void submit(DiaryRequestDto diaryRequestDto){


        Date now = new Date();
        Diary diary = Diary.builder()
                .diaryPicturePath(diaryRequestDto.getPicturePath())
                .diaryContent(diaryRequestDto.getContent())
                .diaryEmotion(diaryRequestDto.getEmotion())
                .diaryDTTM(now)
                .build();
        diaryRepository.save(diary);
        List<DiaryKeywordDto> diaryKeywordList = diaryRequestDto.getDiaryKeywordList();
        for(DiaryKeywordDto diaryKeyword : diaryKeywordList){
//            Long diaryKeywordSequence = diaryKeyword.getDiaryKeywordSequence();
//            Diary diaries = diaryRepository.findDiaryBydiarySequence(diaryKeywordSequence);
            DiaryKeyword diaryKeywords = DiaryKeyword.builder()
                    .diaryKeyword(diaryKeyword.getKeyword())
                    .diary(diary)
                    .build();
            diaryKeywordRepository.save(diaryKeywords);
        }
        return;
    }

}
