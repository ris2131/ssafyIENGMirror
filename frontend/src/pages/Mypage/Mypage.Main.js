import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { diaryApi } from '../../shared/diaryApi';
import { studyApi } from '../../shared/studyApi';
import { authApi } from "../../shared/authApi";

// css
import "./Mypage.scss";
import { Button } from "@mui/material";
import Calendar from 'react-calendar';
import './Calendar.css';

const MypageMain= () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const getUser = useCallback(() => {
    authApi.getuser().then((res) => setNickname(() => res.data.data.nickname));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const [diaryContent, setDiaryContent] = useState("");
  const [diaryEmotion, setDiaryEmotion] = useState("");
  // const [diaryKeywordList, setDiaryKeywordList] = useState([]);
  // const [diaryPicturePath, setDiaryPicturePath] = useState("");

  // 단어 문장
  const [correctWordList, setCorrectWordList] = useState([]);
  const [correctSentenceList, setCorrectSentenceList] = useState([]);

  const [incorrectWordList, setIncorrectWordList] = useState([]);
  const [incorrectSentenceList, setIncorrectSentenceList] = useState([]);


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

  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState("");

  // 일기 불러오기
  const handleChangeDiary = useCallback(async () => {
    setSelectedButton("일기")

    let temp = date.getMonth()+1;

    let month = temp;

    if (temp < 10) {
      month = `0${temp}`;
    }

    const data = `${date.getFullYear()}-${month}-${date.getDate()}`

    try{  
      const res = await diaryApi.getdiary(data);

      if (res.data.status === "SUCCESS") {
        setDiaryContent(res.data.data.diaryContent);
        setDiaryEmotion(res.data.data.diaryEmotion);
        // setDiaryKeywordList(res.data.data.diaryKeywordList);
        setToday(dateToStr(date))
      }
    } catch (e) {
      // 데이터가 없어 조회 실패시 빈값 세팅
      setDiaryContent("이날은 작성한 일기가 없어요.");
      setDiaryEmotion("");
      // setDiaryKeywordList([]);
      setToday(dateToStr(date))
    }
  }, [date]);

  // 학습내역 불러오기
  const handleChangeStudy = useCallback(async () => {
    setSelectedButton("단어 - 문장 학습")

    let temp = date.getMonth()+1;

    let month = temp;

    if (temp < 10) {
      month = `0${temp}`;
    }

    const data = `${date.getFullYear()}-${month}-${date.getDate()}`

    try{  
      const res = await studyApi.gethistory(data);

      if (res.data.status === "SUCCESS") {
        setCorrectWordList(res.data.data.correctWordList);
        setIncorrectWordList(res.data.data.incorrectWordList);

        setCorrectSentenceList(res.data.data.correctSentenceList);
        setIncorrectSentenceList(res.data.data.incorrectSentenceList);

        setToday(dateToStr(date))
      }
    } catch (e) {
      console.log(e)
    }
  }, [date]);

  useEffect(() => {
    setToday(dateToStr(date))

    if (selectedButton === "단어 - 문장 학습") {
      handleChangeStudy();

    }else {
      handleChangeDiary();
    }
  },[date, selectedButton, handleChangeStudy, handleChangeDiary])
 
  return (
    <div className='background'>
      <NavBar />
      
      <div className='back'>
        <div className="mypage-wrapper">
          {/* 회원정보 상자*/}
          <div className="mypage-header">
            {/* 회원 사진 */}
            <img src="image/profile.png" alt=""/>
          
            <div className='name-button'>
              {/* 이름 */}
              <div>{nickname}님 안녕하세요</div>

              {/* 정보 수정 버튼 */}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/profileedit")}
                >
                회원정보 수정
              </Button>
            </div>
          </div>

          <div className='mypage-body'>
            {/* 버튼 */}
            <div className='switch'>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleChangeStudy}
                >
                단어 & 문장 학습
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={handleChangeDiary}
                >
                그림 일기
              </Button>
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
                  {today} 
                </div>

                <div className='date'>
                  {selectedButton}
                </div>
                
                {selectedButton === "단어 - 문장 학습" ? (
                  <div className='word-sentence'>
                    {/* 단어 */}
                    학습한 단어
                    <div className='word'>
                      <div>맞춘 단어</div>
                      <div className='box'>
                      {correctWordList.map((item, index) => (
                        <div key={index}>{item}</div> 
                      ))}
                      </div>
                      
                      <div>틀린 단어</div>
                      <div className='box'>
                      {incorrectWordList.map((item, index) => (
                        <div key={index}>{item}</div> 
                      ))}
                      </div>
                    </div>

                    {/* 문장 */}
                    학습한 문장
                    <div className='sentence'>
                      <div>맞춘 문장</div>
                      <div className='box'>
                      {correctSentenceList.map((item, index) => (
                        <div key={index}>{item}</div> 
                      ))}
                      </div>

                      <div>틀린 문장</div>
                      <div className='box'>
                      {incorrectSentenceList.map((item, index) => (
                        <div key={index}>{item}</div> 
                      ))}
                      </div>
                    </div>
                  </div>

                  ) : (

                  <div className='diary'>
                    <div className='emotion'>{diaryEmotion}</div>
                    <div className='img-content'>
                      {/* 사진 */}
                      <img src="image/default_image.png" alt=""/>

                      {/* 일기 */}
                      <div className='content'> {diaryContent} </div>
                    </div>
                    
                    {/* 단어 */}
                    <div className='word'>
                      {/* <div>
                        {diaryKeywordList.map((item, index) => (
                          <div key={index}>{item}</div> 
                        ))}
                      </div> */}
                    </div>
                  </div>    
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MypageMain;