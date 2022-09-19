package com.ieng.ieng.domain.word.controller;

import com.ieng.ieng.domain.word.dto.WordGetResponseDto;
import com.ieng.ieng.domain.word.service.WordService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/words")
@RequiredArgsConstructor
public class WordController {

    private final WordService wordService;

    @GetMapping()
    public ResponseEntity<?> getWordList(@RequestParam("number")int number){
        WordGetResponseDto wordResponseDto = wordService.getWordList(number);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("word 성공",wordResponseDto));
    }

}
