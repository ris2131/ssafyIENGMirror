package com.ieng.ieng.domain.word.service;

import com.ieng.ieng.domain.word.dto.WordGetResponseDto;
import com.ieng.ieng.domain.word.entity.Word;
import com.ieng.ieng.domain.word.repository.WordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class WordServiceImpl implements WordService{


    private final WordRepository wordRepository;

    @Override
    public WordGetResponseDto getWordList(int number){
        //logic
        List<Word> wordList = wordRepository.findAll();
        Random rnd = new Random();

        Set<Word> wordSet = new HashSet<>();
        while( wordSet.size() < number){
            int randomNum = rnd.nextInt(wordList.size());
            Word word = wordList.get(randomNum);
            if(wordSet.contains(word)){
                continue;
            }else{
                wordSet.add(word);
            }
        }
        WordGetResponseDto wordGetResponseDto = new WordGetResponseDto(wordSet);
        return wordGetResponseDto;
    }
}
