package com.ieng.ieng.domain.history.service;

import com.ieng.ieng.domain.history.dto.WordHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.WordSubmitDto;
import com.ieng.ieng.domain.history.entity.WordHistory;
import com.ieng.ieng.domain.history.repository.WordHistoryRepository;
import com.ieng.ieng.domain.word.entity.Word;
import com.ieng.ieng.domain.word.repository.WordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WordSubmitServiceImpl implements WordSubmitService{

    private final WordHistoryRepository wordHistoryRepository;
    private final WordRepository wordRepository;
    @Override
    public void submit(WordHistoryRequestDto wordHistoryRequestDto){
        System.out.println("hello");
        System.out.println("size : "+ wordHistoryRequestDto.getWordSubmitList());
        System.out.println("world");
        List<WordSubmitDto> wordSubmitList = wordHistoryRequestDto.getWordSubmitList();
        for(WordSubmitDto wordSubmit : wordSubmitList){
            int wordSequence = wordSubmit.getWordSequence();
            Word word = wordRepository.findWordByWordSequence(wordSequence);
            Date now = new Date();

            WordHistory wordHistory = WordHistory.builder()
                    .word(word)
                    .wordHistoryPass(wordSubmit.getCorrect())
                    .wordHistoryDTTM(now)
                    .build();
            wordHistoryRepository.save(wordHistory);
        }
        return;
    }
}
