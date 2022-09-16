import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
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

const DiaryWriting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL, checkedList } = location.state;

  // 오늘의 기분
  const [Emotion, setEmotion] = useState("");
  const handleSelect = (e) => {
    setEmotion(e.target.value);
  };

  // 일기 내용
  const [content, setContent] = useState("");

  // 모달 임시 데이터
  const title = "단어"
  const description = "설명"

  return (
    <div>
      <NavBar />

      <div className="diary-wrapper">
        {/* 머리글 */}
        <div className="diary-header">
          00 님의 특별한 일기를 작성 해 주세요!

          {/* 감정 선택 */}
          <div className="emotion">
            <div className="diary-header">오늘의 감정</div>
            <RadioGroup
              aria-label="platform"
              defaultValue="Website"
              overlay
              name="platform"
              sx={{
                flexDirection: 'row',
                gap: 2,
                [`& .${radioClasses.checked}`]: {
                  [`& .${radioClasses.action}`]: {
                    inset: -1,
                    border: '3px solid',
                    borderColor: 'primary.500',
                  },
                },
                [`& .${radioClasses.radio}`]: {
                  display: 'contents',
                  '& > svg': {
                    zIndex: 2,
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    bgcolor: 'background.body',
                    borderRadius: '50%',
                  },
                },
              }}
            >
              {['Happy', 'Fun', 'Envy', 'Curious', 'Nervous', 'SoSo', 'Shy', 'Tired', 'Sad', 'Angry'].map((value) => (
                <Sheet
                  key={value}
                  variant="outlined"
                  sx={{
                    borderRadius: 'md',
                    bgcolor: 'background.level1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 2,
                    minWidth: 60,
                  }}
                  onChange={handleSelect} value={Emotion}
                >
                  <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
                  <img src={`image/${value}.png`} alt="이미지 없음"/>
                  <FormLabel htmlFor={value}>{value}</FormLabel>
                </Sheet>
              ))}
            </RadioGroup>
          </div>
          <br/>
          오늘의 일기
        </div>

        {/* 일기 작성 */}
        <div className="diary-body">
          {/* 사진 */}
          <img src={preview_URL} alt="이미지 없음"/>
          
          {/* 빈 공간 */}
          <div className="void"/>

          {/* 내용 */}
          <div className="text">
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="text"
              placeholder="오늘 하루는 어떤 일이 있었나요?"
              value={content}
            />
          </div>  
        </div>
        
        {/* 단어 */}
        <div className="word">
          {checkedList.map((item, index) => (
            <div class="word-list">
              <span>{item}</span>
              <BasicModal title={title} description={description} />
            </div>
          ))} 
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/diarycheck", {state : { preview_URL : preview_URL, checkedList : checkedList, Emotion : Emotion, diary : content }})}
            >
            문법 체크
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiaryWriting;