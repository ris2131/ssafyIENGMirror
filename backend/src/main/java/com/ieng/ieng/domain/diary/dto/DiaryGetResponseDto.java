package com.ieng.ieng.domain.diary.dto;

import com.ieng.ieng.domain.diary.entity.Diary;
import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public class DiaryGetResponseDto {
    Diary diary;
}
