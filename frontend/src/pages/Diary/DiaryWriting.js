import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useSelector } from "react-redux";

// css
import "./Diary.scss";
import { Button } from "@mui/material";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const DiaryWriting = () => {
  const username = useSelector((state) => state.auth.user.nickname);
  const navigate = useNavigate();
  const location = useLocation();
  const { image, checkedList } = location.state;

  // 오늘의 기분
  const [emotion, setEmotion] = useState("");

  const handleSelect = useCallback((e) => {
    setEmotion(e.target.value);
  },[]);

  // 일기 내용
  const [content, setContent] = useState("");

  // 사용한 단어들
  let CheckedWord = [];

  const wordCheck = () => {
    for (let i in checkedList) {
      if (content.includes(checkedList[i])) {
        CheckedWord.push(checkedList[i]);
      }
    }
  };

  return (
    <div className="background">
      <NavBar />

      <div className="back">
        <div className="diary-wrapper">
          {/* 머리글 */}
          <div className="diary-header">
            {username} 님의 특별한 일기를 작성 해 주세요!
            {/* 감정 선택 */}
            <div className="emotion">
              <div className="diary-header">오늘의 감정</div>
              <RadioGroup
                aria-label="platform"
                defaultValue="Website"
                overlay
                name="platform"
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -1,
                      border: "3px solid",
                      borderColor: "primary.500",
                    },
                  },
                  [`& .${radioClasses.radio}`]: {
                    display: "contents",
                    "& > svg": {
                      zIndex: 2,
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      bgcolor: "background.body",
                      borderRadius: "50%",
                    },
                  },
                }}
              >
                {[
                  "Happy",
                  "Fun",
                  "Envy",
                  "Curious",
                  "Nervous",
                  "SoSo",
                  "Shy",
                  "Tired",
                  "Sad",
                  "Angry",
                ].map((value) => (
                  <Sheet
                    key={value}
                    variant="outlined"
                    sx={{
                      borderRadius: "md",
                      bgcolor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0,
                      p: 2,
                      width: "30px",
                    }}
                    onChange={handleSelect}
                    value={emotion}
                  >
                    <Radio
                      id={value}
                      value={value}
                      checkedIcon={<CheckCircleRoundedIcon />}
                    />
                    <img src={`image/${value}.png`} alt="" />
                    <FormLabel sx={{ fontSize: "1vw" }} htmlFor={value}>
                      {value}
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* 일기 작성 */}
          <div className="diary-header">오늘의 일기</div>

          <div className="diary-body">
            <div className="text">
              {/* 사진 */}
              <img src={image.preview_URL} alt="" />

              {/* 일기 */}
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
          <div className="words">
            <div className="word">
              {checkedList.map((item, index) => (
                <div className="word-list" key={index}>
                  {content.includes(item) ? (
                    <TaskAltIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {emotion === "" || content === "" ? (
              <Button variant="outlined" color="primary">
                아직 입력하지 않은 내용이 있어요
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  wordCheck();
                  navigate("/diarycheck", {
                    state: {
                      image: image,
                      checkedList: CheckedWord,
                      emotion: emotion,
                      diary: content,
                    },
                  });
                }}
              >
                문법 체크
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryWriting;
