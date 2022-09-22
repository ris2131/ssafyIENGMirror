package com.ieng.ieng.domain.diary.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class DiaryKeywordDto {
//    @JsonProperty("diary_keyword_seq")
//    private Long diaryKeywordSequence;

    @JsonProperty("keyword")
    private String keyword;
}
