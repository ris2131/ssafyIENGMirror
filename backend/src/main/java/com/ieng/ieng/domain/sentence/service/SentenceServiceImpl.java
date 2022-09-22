package com.ieng.ieng.domain.sentence.service;

import com.ieng.ieng.domain.sentence.repository.SentenceRepository;
import com.ieng.ieng.domain.sentence.dto.SentenceGetResponseDto;
import com.ieng.ieng.domain.sentence.entity.Sentence;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class SentenceServiceImpl implements SentenceService{
    private final SentenceRepository sentenceRepository;

    @Override
    public SentenceGetResponseDto getSentenceList(int number){
        //logic
        List<Sentence> sentenceList = sentenceRepository.findAll();
        Random rnd = new Random();

        Set<Sentence> sentenceSet = new HashSet<>();
        while( sentenceSet.size() < number){
            int randomNum = rnd.nextInt(sentenceList.size());
            Sentence sentence = sentenceList.get(randomNum);
            if(sentenceSet.contains(sentence)){
                continue;
            }else{
                sentenceSet.add(sentence);
            }
        }
        SentenceGetResponseDto sentenceGetResponseDto = new SentenceGetResponseDto(sentenceSet);
        return sentenceGetResponseDto;
    }
}
