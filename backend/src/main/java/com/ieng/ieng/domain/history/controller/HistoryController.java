package com.ieng.ieng.domain.history.controller;

import com.ieng.ieng.domain.history.dto.WordHistoryRequestDto;
import com.ieng.ieng.domain.history.dto.WordSubmitDto;
import com.ieng.ieng.domain.history.service.WordSubmitService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/histories")
@RequiredArgsConstructor
public class HistoryController {
    private final WordSubmitService wordSubmitService;
    final static Logger logger = LogManager.getLogger(HistoryController.class);
    @PostMapping(value = "/words")
    public ResponseEntity<?> submitWordHistories(@RequestBody WordHistoryRequestDto wordHistoryRequestDto){
        List<WordSubmitDto> a = wordHistoryRequestDto.getWordSubmitList();
        logger.debug("[0] : "+a.get(0).getWordSequence() + a.get(0).getCorrect());
        logger.debug("[1] : "+a.get(1).getWordSequence() + a.get(1).getCorrect());
        logger.debug("[2] : "+a.get(2).getWordSequence() + a.get(2).getCorrect());

        wordSubmitService.submit(wordHistoryRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("wordHistory 제출 성공",null));
    }
}
