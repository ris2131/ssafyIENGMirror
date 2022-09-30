import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { authApi } from "../../shared/authApi";

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

// 임시 단어 데이터
const data = [
  "sky",
  "tree",
  "road",
  "blue",
  "green",
];

const DiaryKeyword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL } = location.state;

  // 모달 임시 데이터
  const title = "단어"
  const description = "설명"

  // 선택된 단어
  const [checkedList, setCheckedLists] = useState([]);

  // 선택에 따라 리스트 값 변경
  const onCheckedElement = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedLists([...checkedList, item]);

      } else {
        setCheckedLists(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );

  // 닉네임 불러오기
  const [nickname, setNickname] = useState("");
  const getUser = useCallback(() => {
    authApi.getuser().then((res) => setNickname(() => res.data.data.nickname));
  }, []);

  // 페이지 로딩시 닉네임 바로 불러오기
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="background">
      <NavBar />
      
      <div className="back">
        <div className="diary-wrapper">
          {/* 머리글 */}
          <div className="diary-header">
            {nickname} 님이 고르신 사진이네요
            <br/>
            일기장에 쓸 단어를 골라볼까요?
          </div>

          {/* 사진 */}
          <div className="img-body">
            <img src={preview_URL} alt="이미지 없음"/>
          </div>

          {/* 단어 선택 */}
          <div className="words">
            <div className="keyword-check">
              {data.map((item, index) => (
                <div className="check-button" key={index}>
                  <input
                    key={item}
                    type="checkbox"
                    onChange={(e) => onCheckedElement(e.target.checked, item)}
                    checked={checkedList.includes(item) ? true : false}
                  />
                  <span>{item}</span>
                  <BasicModal title={title} description={description} />
                </div>
              ))} 
            </div>
          </div>
          
          <div>
            {checkedList[0] ? (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/diarywriting", {state : { preview_URL : preview_URL, checkedList : checkedList }})}
                >
                일기 쓰러가기
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                >
                일기에 쓸 단어를 골라 주세요
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiaryKeyword;