import React, { useState, useCallback, useEffect, } from 'react';
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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyButton from "../../components/MyButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #ececec",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

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
      setDiaryContent("");
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

  // 일기 삭제하기
  const handleDeleteDiary = useCallback(async () => {
    let temp = date.getMonth()+1;

    let month = temp;

    if (temp < 10) {
      month = `0${temp}`;
    }

    const data = {
      data : {
        date : `${date.getFullYear()}-${month}-${date.getDate()}`
      }
    }

    console.log(data)

    try{  
      const res = await diaryApi.deletediary(data);

      console.log(res)

      if (res.data.status === "SUCCESS") {
        setDiaryContent("");
        setDiaryEmotion("");
        // setDiaryKeywordList([]);
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

  const title = "삭제 확인";
  const description = "소중한 추억이 담긴 일기를 삭제하면 되돌릴 수 없어요! 정말로 삭제하시겠나요?";

  // 일기 삭제 모달
  const BasicModal = ({ title, description }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <div onClick={handleOpen}>삭제하기</div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>

            <div>
              <MyButton
                onClick={handleDeleteDiary}
                width={"200px"}
                padding={"5px"}
                margin={"30px 10px"}
                text={"네 삭제할게요!"}
              />

              <MyButton
                onClick={handleClose}
                width={"200px"}
                padding={"5px"}
                margin={"30px 10px"}
                text={"좀 더 생각 해 볼게요!"}
              />
            </div>
          </Box>
        </Modal>
      </div>
    );
  };
 
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
                  showNeighboringMonth={false}
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
                      {correctWordList.length === 0 && incorrectWordList.length === 0 ? (
                        <div className='box'>학습한 단어가 없어요!</div>
                      ) : (
                        <div>
                          <div>맞춘 단어</div>
                          <div className='box'>
                          {correctWordList.map((item, index) => (
                            <div key={index}>{item.word}</div> 
                          ))}
                          </div>
                          
                          <div>틀린 단어</div>
                          <div className='box'>
                          {incorrectWordList.map((item, index) => (
                            <div key={index}>{item.word}</div> 
                          ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 문장 */}
                    학습한 문장
                    <div className='sentence'>
                      {correctSentenceList.length === 0 && incorrectSentenceList.length === 0 ? (
                        <div className='box'>학습한 문장이 없어요!</div>
                      ) : (
                        <div>
                          <div>맞춘 문장</div>
                          <div className='box'>
                            {correctSentenceList.map((item, index) => (
                              <div key={index}>{item.sentence}</div> 
                            ))}
                          </div>

                          <div>틀린 문장</div>
                          <div className='box'>
                            {incorrectSentenceList.map((item, index) => (
                              <div key={index}>{item.sentence}</div> 
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  ) : (

                  <div className='diary'>
                    {diaryEmotion ? (
                      <div>
                        <div className='button'>
                        <Button variant="outlined" color="primary">
                          <BasicModal title={title} description={description} />
                        </Button>
                        </div>

                        <div className='emotion'>
                          <img src={`image/${diaryEmotion}.png`} alt=""/>
                          <div>{diaryEmotion}</div>
                        </div>
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
                    ):(
                      <div>작성한 일기가 없어요!</div>
                    )}
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