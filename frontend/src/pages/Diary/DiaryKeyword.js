import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { authApi } from "../../shared/authApi";
// import axios from "axios";

// css
import "./Diary.scss";
import { Button } from "@mui/material";

const DiaryKeyword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL } = location.state;

  // 단어 데이터
  const [wordList, setWordList] = useState([]);

  // 임시 단어 설정
  useEffect(() => {
   setWordList(['sky', 'blue', 'road', 'tree', 'green']);
  },[])

  // 선택된 단어
  const [checkedList, setCheckedLists] = useState([]);

  // 단어 추천 함수 - 제작중
  // const wordRecommend = async() => {
  //   const data = {
  //     image : preview_URL
  //   }

  //   console.log(data)

  //   const res = await axios.post("http://localhost:8000/ai-api/diaries/keywords/", data);

  //   console.log(res)
  // }

  // useEffect(() => {
  //   wordRecommend();
  // })

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
              {wordList.map((item, index) => (
                <div className="check-button" key={index}>
                  <input
                    key={item}
                    type="checkbox"
                    onChange={(e) => onCheckedElement(e.target.checked, item)}
                    checked={checkedList.includes(item) ? true : false}
                  />
                  <span>{item}</span>
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