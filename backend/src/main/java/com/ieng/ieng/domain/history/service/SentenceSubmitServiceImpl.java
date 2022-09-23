package com.ieng.ieng.domain.history.service;


import com.ieng.ieng.domain.history.dto.SentenceHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.SentenceSubmitDto;
import com.ieng.ieng.domain.history.entity.SentenceHistory;
import com.ieng.ieng.domain.history.repository.SentenceHistoryRepository;
import com.ieng.ieng.domain.sentence.entity.Sentence;
import com.ieng.ieng.domain.sentence.repository.SentenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SentenceSubmitServiceImpl implements SentenceSubmitService {

    private final SentenceHistoryRepository sentenceHistoryRepository;

    private final SentenceRepository sentenceRepository;

    @Override
    public void submit(SentenceHistoryRequestDto sentenceHistoryRequestDto){

        List<SentenceSubmitDto> sentenceSubmitList = sentenceHistoryRequestDto.getSentenceSubmitList();
        for(SentenceSubmitDto sentenceSubmit : sentenceSubmitList){
            Long sentenceSequence = sentenceSubmit.getSentenceSequence();
            Sentence sentence = sentenceRepository.findSentenceBySentenceSequence(sentenceSequence);
            Date now = new Date();

            SentenceHistory sentenceHistory = SentenceHistory.builder()
                    .sentence(sentence)
                    .sentenceHistoryPass(sentenceSubmit.getCorrect())
                    .sentenceHistoryDTTM(now)
                    .build();
            sentenceHistoryRepository.save(sentenceHistory);
        }
        return;

    }
}
