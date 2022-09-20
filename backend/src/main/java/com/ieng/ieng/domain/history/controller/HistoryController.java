package com.ieng.ieng.domain.history.controller;

import com.ieng.ieng.domain.history.dto.WordHistoryRequestDto;
import com.ieng.ieng.domain.history.service.WordSubmitService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/histories")
@RequiredArgsConstructor
public class HistoryController {
    private final WordSubmitService wordSubmitService;

    @PostMapping("/words")
    public ResponseEntity<?> submitWordHistories(@RequestBody WordHistoryRequestDto wordHistoryRequestDto){
        wordSubmitService.submit(wordHistoryRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("wordHistory 제출 성공",null));
    }
}
