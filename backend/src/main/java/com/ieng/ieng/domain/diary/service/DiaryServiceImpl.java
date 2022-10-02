package com.ieng.ieng.domain.diary.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.ieng.ieng.domain.diary.dto.DiaryDeleteDto;
import com.ieng.ieng.domain.diary.dto.DiaryGetResponseDto;
import com.ieng.ieng.domain.diary.dto.DiaryKeywordDto;
import com.ieng.ieng.domain.diary.dto.DiaryRequestDto;
import com.ieng.ieng.domain.diary.entity.Diary;
import com.ieng.ieng.domain.diary.entity.DiaryKeyword;
import com.ieng.ieng.domain.diary.repository.DiaryKeywordRepository;
import com.ieng.ieng.domain.diary.repository.DiaryRepository;
import com.ieng.ieng.domain.member.entity.Member;
import com.ieng.ieng.domain.member.repository.MemberRepository;
import com.ieng.ieng.global.exception.DuplicateDiaryException;
import com.ieng.ieng.global.exception.EmptyFileException;
import com.ieng.ieng.global.exception.NoDiaryException;
import com.ieng.ieng.global.exception.NoExistMemberException;
import com.ieng.ieng.global.s3.S3UploaderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService{

    private final MemberRepository memberRepository;
    private final DiaryRepository diaryRepository;

    private final DiaryKeywordRepository diaryKeywordRepository;
    private final S3UploaderServiceImpl s3UploaderService;
    @Value("${cloud.aws.s3.domain}")
    String s3Domain ;

    final static Logger logger = LogManager.getLogger(DiaryServiceImpl.class);
    @Override
    public DiaryGetResponseDto diaryDetail(String email, String date){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
         if(!diaryRepository.existsByMemberAndDiaryDTTM(member, date)) {

            throw new NoDiaryException("해당 날짜 다이어리 내용이 없습니다.");
        }
        Diary diary;
        try {
            diary = diaryRepository.findDiaryByMemberAndDiaryDTTM(member, date);
        }catch (IncorrectResultSizeDataAccessException e){
            throw new DuplicateDiaryException("해당 날짜에 일기가 두개인 오류 발생.");
        }

        List<DiaryKeyword> diaryKeywordList = diaryKeywordRepository.findByDiary_DiarySequence(diary.getDiarySequence());
        List<String> diaryKeywords = new ArrayList<>();
        for(DiaryKeyword diaryKeyword :diaryKeywordList){
            diaryKeywords.add(diaryKeyword.getDiaryKeyword());
        }

        String picturePath = "user/"+email+"/diary"+"/"+date+"/photo.jpg";


        DiaryGetResponseDto diaryGetResponseDto  = DiaryGetResponseDto.builder()
                .diarySequence(diary.getDiarySequence())
                .memberSequence(member.getMemberSequence())
                //.diaryPicturePath(diary.getDiaryPicturePath())
                .diaryPicturePath(s3Domain+picturePath)
                .diaryContent(diary.getDiaryContent())
                .diaryEmotion(diary.getDiaryEmotion())
                .diaryDTTM(diary.getDiaryDTTM())
                .diaryKeywordList(diaryKeywords)
                .build();

        return diaryGetResponseDto;

    }



    @Override
    public void createDiary(String email, DiaryRequestDto diaryRequestDto){

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        Diary diary = Diary.builder()
                .member(member)
                .diaryPicturePath(diaryRequestDto.getPicturePath())
                .diaryContent(diaryRequestDto.getContent())
                .diaryEmotion(diaryRequestDto.getEmotion())
                .diaryDTTM(date.format(formatter))
                .build();
        diaryRepository.save(diary);
        List<DiaryKeywordDto> diaryKeywordList = diaryRequestDto.getDiaryKeywordList();
        for(DiaryKeywordDto diaryKeywordDto : diaryKeywordList){
            DiaryKeyword diaryKeyword = DiaryKeyword.builder()
                    .diaryKeyword(diaryKeywordDto.getKeyword())
                    .diary(diary)
                    .build();
            diaryKeywordRepository.save(diaryKeyword);
        }
        return;
    }
    @Override
    public void uploadDiaryImage(MultipartFile multipartFile, String email) {
        if(multipartFile.isEmpty()){
            throw new EmptyFileException("파일이 없습니다.");
        }
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String today = date.format(formatter);
        int index = multipartFile.getOriginalFilename().indexOf(".");
        String fileNameExtension = multipartFile.getOriginalFilename().substring(index);
        String fileName= "user/"+email+"/diary"+"/"+today+"/photo"+fileNameExtension;
        s3UploaderService.uploadPicture(multipartFile, fileName);


    }
    @Override
    public void deleteDiary(String email, DiaryDeleteDto diaryDeleteDto){
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoExistMemberException("존재하는 회원정보가 없습니다."));
        Diary diary = diaryRepository.findDiaryByMemberAndDiaryDTTM(member, diaryDeleteDto.getDate());
        diaryRepository.delete((diary));
    }

}
