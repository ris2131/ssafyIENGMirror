package com.ieng.ieng.domain.history.repository;

import com.ieng.ieng.domain.history.entity.WordHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordHistoryRepository extends JpaRepository<WordHistory,Long> {

}
