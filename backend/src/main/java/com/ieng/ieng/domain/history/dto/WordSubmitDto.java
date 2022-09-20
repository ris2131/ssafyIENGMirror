package com.ieng.ieng.domain.history.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class WordSubmitDto {
    private int wordSequence;
    private boolean correct;

    public boolean getCorrect(){
        return this.correct;
    }
}
