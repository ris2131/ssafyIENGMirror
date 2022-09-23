package com.ieng.ieng.domain.diary.controller;


import com.ieng.ieng.domain.diary.dto.DiaryDeleteDto;
import com.ieng.ieng.domain.diary.dto.DiaryRequestDto;
import com.ieng.ieng.domain.diary.service.DiaryService;
import com.ieng.ieng.global.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/diaries")
@RequiredArgsConstructor
public class DiaryController {


    private final DiaryService diaryService;
    @PostMapping
    public ResponseEntity<?> createDiary(HttpServletRequest request, @RequestBody DiaryRequestDto diaryRequestDto){
        String email = (String)request.getAttribute("email");
        diaryService.createDiary(email, diaryRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("그림일기 작성 성공",null));
    }
    @DeleteMapping
    public ResponseEntity<?> deleteDiary(HttpServletRequest request, @RequestBody DiaryDeleteDto diaryDeleteDto){
        String email = (String)request.getAttribute("email");
        diaryService.deleteDiary(email, diaryDeleteDto);
        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.createSuccess("그림일기 삭제 성공",null));
    }


}
