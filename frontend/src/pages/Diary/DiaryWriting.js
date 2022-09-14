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

const DiaryWriting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL, checkedList } = location.state;

  const [content, setContent] = useState("");
 
  return (
    <div>
      <NavBar />

      <div className="diary-wrapper">
        {/* 머리글 */}
        <div className="diary-header">
          00 님의 특별한 일기를 작성 해 주세요!

          {/* 감정 선택 */}
          <div class="emotion">
            <div class="diary-header">오늘의 감정</div>
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
              {['Happy', 'SoSo', 'Sad', 'Angry'].map((value) => (
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
                    minWidth: 80,
                  }}
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
        </div>

        <div class="word">
          {checkedList}
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/diarycheck", {state : {preview_URL : preview_URL, diary : content }})}
            >
            문법 체크
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiaryWriting;