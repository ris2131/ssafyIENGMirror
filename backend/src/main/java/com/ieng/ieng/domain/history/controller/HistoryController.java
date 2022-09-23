package com.ieng.ieng.domain.history.controller;

import com.ieng.ieng.domain.history.dto.SentenceHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.SentenceSubmitDto;
import com.ieng.ieng.domain.history.dto.WordHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.WordSubmitDto;
import com.ieng.ieng.domain.history.service.SentenceSubmitService;
import com.ieng.ieng.domain.history.service.WordSubmitService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/histories")
@RequiredArgsConstructor
public class HistoryController {
    private final WordSubmitService wordSubmitService;

    private final SentenceSubmitService sentenceSubmitService;
    final static Logger logger = LogManager.getLogger(HistoryController.class);
    @PostMapping(value = "/words")
    public ResponseEntity<?> submitWordHistories(HttpServletRequest request , @RequestBody WordHistoryRequestDto wordHistoryRequestDto){
        String email = (String) request.getAttribute("email");

        wordSubmitService.submit(email, wordHistoryRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("wordHistory 제출 성공",null));
    }

    @PostMapping(value = "/sentences")
    public ResponseEntity<?> submitSentenceHistories(@RequestBody SentenceHistoryRequestDto sentenceHistoryRequestDto){
        List<SentenceSubmitDto> a = sentenceHistoryRequestDto.getSentenceSubmitList();
        logger.debug("[0] : "+a.get(0).getSentenceSequence() + a.get(0).getCorrect());
        logger.debug("[1] : "+a.get(1).getSentenceSequence() + a.get(1).getCorrect());
        logger.debug("[2] : "+a.get(2).getSentenceSequence() + a.get(2).getCorrect());

        sentenceSubmitService.submit(sentenceHistoryRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("sentenceHistory 제출 성공",null));
    }
}
