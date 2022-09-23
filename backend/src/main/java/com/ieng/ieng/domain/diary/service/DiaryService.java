package com.ieng.ieng.domain.diary.service;

import com.ieng.ieng.domain.diary.dto.DiaryRequestDto;

public interface DiaryService {

    void createDiary(String email, DiaryRequestDto diaryRequestDto);
}
