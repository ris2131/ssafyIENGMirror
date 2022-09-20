import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Mypage.scss";
import { Button } from "@mui/material";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// 임시 단어 문장 데이터
const word = ["Apple", "Sky", "Pig"]
const sentence = ["watch movie", "sing a song", "take a movie"]

const MypageMain= () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const [selectedButton, setSelectedButton] = useState("단어 - 문장 학습");

  // 선택한 날짜 표시
  const dateToStr = (date) => {
    var week = ['일', '월', '화', '수', '목', '금', '토'];  
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var dayName = week[date.getDay()];
  
    return year+'년 '+month+'월 '+day+'일 '+dayName+'요일';
  };
  
 
  return (
    <div>
      <NavBar />

      <div className="mypage-wrapper">
        {/* 회원정보 상자*/}
        <div className="mypage-header">
          {/* 회원 사진 */}
          <img src="image/profile.png" alt=""/>
         
          <div className='name-button'>
            {/* 이름 */}
            <div>00님 안녕하세요</div>

            {/* 정보 수정 버튼 */}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/")}
              >
              회원정보 수정
            </Button>
          </div>

          {/* 빈공간 */}
          <div className='void'/>
        </div>

        <div className='mypage-body'>
          {/* 버튼 */}
          <div className='switch'>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setSelectedButton("단어 - 문장 학습")}
              >
              단어 & 문장 학습
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => setSelectedButton("일기")}
              >
              그림 일기
            </Button>

            <div className='void'/>
          </div>

          <div className='cal-study'>
            {/* 달력 */}
            <div className='calender'>
              <Calendar
                onChange={setDate}
                value={date}
              />
            </div>

            {/* 학습 내용 */}
            <div className='study'>
              {/* 오늘의 날짜 */}
              <div className='date'>
                {dateToStr(date)} 
              </div>

              <div className='date'>
                {selectedButton}
              </div>
              
              {selectedButton === "단어 - 문장 학습" ? (
                <div className='word-sentence'>
                  {/* 단어 */}
                  학습한 단어
                  <div className='word'>
                    {word.map((item) => (
                      <div>{item}</div> 
                    ))}
                  </div>

                  {/* 문장 */}
                  학습한 문장
                  <div className='sentence'>
                    {sentence.map((item) => (
                      <div>{item}</div> 
                    ))}
                  </div>
                </div>

                ) : (

                <div className='diary'>
                  일 기 내 용 넣 어 야 함
                </div>    
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MypageMain;