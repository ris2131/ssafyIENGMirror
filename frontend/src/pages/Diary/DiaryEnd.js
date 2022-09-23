import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";
import { FaQuestion } from "react-icons/fa";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyButton from "../../components/MyButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ececec",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// 단어 설명 모달창
const BasicModal = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <FaQuestion onClick={handleOpen} />
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
          <MyButton
            onClick={handleClose}
            width={"30%"}
            padding={"5px"}
            text={"확인"}
          />
        </Box>
      </Modal>
    </div>
  );
};

const DiaryEnd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL, checkedList, Emotion, diary } = location.state;
  const today = new Date();

  // 모달 임시 데이터
  const title = "단어"
  const description = "설명"

  return (
    <div className="background">
      <NavBar />

      <div className="diary-wrapper">
        {/* 머리글 */}
        <div className="diary-header">
          오늘의 일기 작성이 끝났어요!

          {/* 날짜 */}
          <div className="date">오늘 : {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일</div>

          {/* 기분 */}
          <div className="emotion">
            <span>오늘의 기분 : {Emotion}</span>
            <img src={`image/${Emotion}.png`} alt=""/>
          </div>
          
        </div>

        {/* 일기 메인 */}
        <div className="diary-body">
          {/* 사진 */}
          <img src={preview_URL} alt=""/>
          
          <div className="void"/>
         
         {/* 일기 */}
          <div className="checked">
            {diary}
          </div>
        </div>

        {/* 단어 */}
        <div>사용한 단어</div>
        <div className="word">
          {checkedList.map((item, index) => (
            <div className="word-list" key={index}>
              <span>{item}</span>
              <BasicModal title={title} description={description} />
            </div>
          ))} 
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
  );
}

export default DiaryEnd;