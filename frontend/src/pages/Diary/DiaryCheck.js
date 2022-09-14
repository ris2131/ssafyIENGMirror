import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";

const DiaryCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { diary } = location.state;

  const [content, setContent] = useState(diary);

  return (
    <div>
      <NavBar />

      <div className="diary-wrapper">
        {/* 머리글 */}
        <div className="diary-header">
          00 님의 일기에 어색한 부분을 같이 수정 해 볼까요?
        </div>

        {/* 일기 작성 */}
        <div className="diary-body">
          {/* 내용 */}
          <div class="text">
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="text"
              placeholder="일기를 작성해 봐요!"
              value={content}
            />
          </div>  

          <div class="text">

          </div>
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            >
            다시 검사 해 보기
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/")}
            >
            작성 완료
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiaryCheck;