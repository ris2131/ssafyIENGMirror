import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar";
//import { diaryPostApi } from "../../shared/diaryApi";
import { useSelector } from "react-redux";


// css
import "./Diary.scss";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyButton from "../../components/MyButton";
import Loading from "../../util/Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #ececec",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// headers 설정
const sp_api = axios.create({
  baseURL: "https://api.bing.microsoft.com/v7.0/spellcheck",
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'Ocp-Apim-Subscription-Key': 'ce11f020da1241f182ed7ee34ec9fcc1',
  }
})

const DiaryCheck = () => {
  const username = useSelector((state) => state.auth.user.nickname);
  const location = useLocation();
  const { image, checkedList, emotion, diary } = location.state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const title = "제출 확인";
  const description = "일기를 제출하면 수정할 수 없어요. 이대로 제출할까요?";

  // 입력한 일기 내용
  const [content, setContent] = useState(diary);

  // 맞춤법 검사 결과
  const [checked, setChecked] = useState({});

  // 맞춤법 검사 함수
  const spellCheck = async(text) => {
    const mkt = "en-US"
    const mode = "proof"

    const {data} = await sp_api.post(`?mkt=${mkt}&mode=${mode}&text=${text}`);

    let wrongWordList = {};

    for (const word of data.flaggedTokens) {
      for (const sugges of word.suggestions) {
        if (sugges.score >= 0.65) {
          if (typeof wrongWordList[word.token] == "undefined") {
            wrongWordList[word.token] = [];
          }
          let temp = wrongWordList[word.token];
          temp.push(sugges.suggestion);
          wrongWordList[word.token] = temp;
        }
      }
    }
    setLoading(false);
    setChecked(wrongWordList)
  }

  useEffect(() => {
    spellCheck(diary);
  },[diary])

  // 일기 제출하기
  const handleSubmit = useCallback(async () => {
    const keywords = []
    for (let i = 0; i < checkedList.length; i++) {
      keywords.push({"keyword" : checkedList[i]})
    }

    const temp = {
      content : content,
      emotion : emotion,
      keywords : keywords
    }

    const formData = new FormData()
    formData.append('diary_image', image.image_file)
    formData.append("data", new Blob([JSON.stringify(temp)], {type: "application/json"}))

    const baseURL = "http://localhost:3000/";
    const token = localStorage.getItem("token");
    const postApi = axios.create({
      baseURL,
      headers: {
        "Content-type": "multipart/form-data",
        "Authorization": token,
      },
    });

    try{  
      const res = await postApi.post("api/diaries", formData);

      if (res.data.status === "SUCCESS") {
        window.alert("등록이 완료되었습니다.");
        navigate("/diaryend", {
          state: {
            image: image,
            checkedList: checkedList,
            emotion: emotion,
            diary: content,
          },
        })
      }
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e)
    }
  }, [navigate, content, emotion, checkedList, image]);

  // 제출 모달창
  const BasicModal = ({ title, description }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>제출하기</Button>

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
                onClick={handleSubmit}
                width={"180px"}
                padding={"5px"}
                margin={"30px 10px"}
                text={"네 제출할게요!"}
              />

              <MyButton
                onClick={handleClose}
                width={"180px"}
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
    <div className="background">
      <NavBar />

      {loading ? (
        <Loading />
      ) : (
        <div className="back">
          <div className="diary-wrapper">
            {/* 머리글 */}
            <div className="diary-header">
              {username}님의 일기에 어색한 부분을 같이 수정 해 볼까요?
            </div>

            {/* 일기 작성 */}
            <div className="diary-body">
              {/* 내용 */}
              <div className="text">
                <div>
                  <div className="diary-header">작성한 내용</div>
                  <textarea
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="text"
                    placeholder="일기를 작성해 봐요!"
                    value={content}
                  />
                </div>

                {/* 문법 체크 결과 */}
                <div>
                  <div className="diary-header">수정할 내용</div>
                  <div className="checked">
                    {Object.keys(checked).length === 0 ? (
                      <span>완벽하네요!</span>
                    ) : (
                      <div>
                      {Object.entries(checked).map((item, index) => (
                        <div key={index}>
                          {item[0]} -&gt; {item[1]}
                        </div>
                      ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="button">
              <Button               
                onClick={() => {spellCheck(content)}}
              >
                검사 하기
              </Button>

              <BasicModal title={title} description={description} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryCheck;
