package com.ieng.ieng.domain.history.repository;

import com.ieng.ieng.domain.history.entity.SentenceHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SentenceHistoryRepository extends JpaRepository<SentenceHistory, Long> {
}
