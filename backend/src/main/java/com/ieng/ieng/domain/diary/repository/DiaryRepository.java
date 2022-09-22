package com.ieng.ieng.domain.diary.repository;

import com.ieng.ieng.domain.diary.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary,Long> {

}
