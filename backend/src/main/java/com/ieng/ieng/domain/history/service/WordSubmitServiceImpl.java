package com.ieng.ieng.domain.history.service;

import com.ieng.ieng.domain.history.dto.WordHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.WordSubmitDto;
import com.ieng.ieng.domain.history.entity.WordHistory;
import com.ieng.ieng.domain.history.repository.WordHistoryRepository;
import com.ieng.ieng.domain.member.entity.Member;
import com.ieng.ieng.domain.member.repository.MemberRepository;
import com.ieng.ieng.domain.word.entity.Word;
import com.ieng.ieng.domain.word.repository.WordRepository;
import com.ieng.ieng.global.exception.NoExistMemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WordSubmitServiceImpl implements WordSubmitService{

    private final WordHistoryRepository wordHistoryRepository;
    private final WordRepository wordRepository;
    private final MemberRepository memberRepository;
    @Override
    public void submit(String email,WordHistoryRequestDto wordHistoryRequestDto){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));

        List<WordSubmitDto> wordSubmitList = wordHistoryRequestDto.getWordSubmitList();
        for(WordSubmitDto wordSubmit : wordSubmitList){
            Long wordSequence = wordSubmit.getWordSequence();
            Word word = wordRepository.findWordByWordSequence(wordSequence);
            Date now = new Date();

            WordHistory wordHistory = WordHistory.builder()
                    .word(word)
                    .wordHistoryPass(wordSubmit.getCorrect())
                    .wordHistoryDTTM(now)
                    .member(member)
                    .build();
            wordHistoryRepository.save(wordHistory);
        }
        return;
    }
}
