import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";

const DiaryEnd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL, checkedList, emotion, diary } = location.state;
  const today = new Date();

  return (
    <div className="background">
      <NavBar />

      <div className="back">
        <div className="diary-wrapper">
          {/* 머리글 */}
          <div className="diary-header">
            오늘의 일기 작성이 끝났어요!

            {/* 날짜 */}
            <div className="date">오늘 : {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일</div>

            {/* 기분 */}
            <div className="emotion">
              <span>오늘의 기분 : {emotion}</span>
              <img src={`image/${emotion}.png`} alt=""/>
            </div>
          </div>

          {/* 일기 메인 */}
          <div className="diary-body">
            <div className="text">
              {/* 사진 */}
              <img src={preview_URL} alt=""/>
            
              {/* 일기 */}
              <div className="content">
                {diary}
              </div>
            </div>
            
          </div>

          {/* 단어 */}
          <div className="words">
            <div className="diary-header">사용한 단어</div>

            <div className="word">
              {checkedList.map((item, index) => (
                <div className="word-list" key={index}>
                  <span>{item}</span>
                </div>
              ))} 
            </div>

          </div>

          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/")}
              >
              메인화면으로 가기
            </Button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default DiaryEnd;