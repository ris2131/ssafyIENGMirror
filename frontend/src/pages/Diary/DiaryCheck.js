import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";
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

const DiaryCheck = () => {
  const location = useLocation();
  const { preview_URL, checkedList, Emotion, diary } = location.state;

  const title = "제출 확인"
  const description = "일기를 제출하면 수정할 수 없어요. 이대로 제출할까요?"

  const [content, setContent] = useState(diary);

  // 단어 설명 모달창
  const BasicModal = ({ title, description }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    return (
      <div>
        <div onClick={handleOpen}>제출하기</div>

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
                onClick={() => navigate("/diaryend", {state : { preview_URL : preview_URL, checkedList : checkedList, Emotion : Emotion, diary : content }})}
                width={"200px"}
                padding={"5px"}
                margin={"30px 10px"}
                text={"네 제출할게요!"}
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
          
          <div className="void"/>
         
          <div className="checked">
            수정 된 내용 !
          </div>
        </div>

        <div className="button">
          <Button
            variant="outlined"
            color="primary"
            >
            다시 검사 해 보기
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
          >
            <BasicModal title={title} description={description} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiaryCheck;