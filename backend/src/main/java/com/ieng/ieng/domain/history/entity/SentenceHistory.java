package com.ieng.ieng.domain.history.entity;


import com.ieng.ieng.domain.sentence.entity.Sentence;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Table(name = "SENTENCES_HISTORIES")
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SentenceHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SENTENCE_HISTORY_SEQ")
    private Long sentenceHistorySequence;

    @ManyToOne()
    @JoinColumn(name = "SENTENCE_SEQ")
    private Sentence sentence;

    @Column(name = "SENTENNCE_HISTORY_PASS")
    private boolean sentenceHistoryPass;

    @Column(name = "SENTENCE_HISOTRY_DTTM")
    private Date sentenceHistoryDTTM;

    @Builder
    public SentenceHistory(Sentence sentence, boolean sentenceHistoryPass, Date sentenceHistoryDTTM){
        this.sentence = sentence;
        this.sentenceHistoryPass = sentenceHistoryPass;
        this.sentenceHistoryDTTM = sentenceHistoryDTTM;
    }
}
