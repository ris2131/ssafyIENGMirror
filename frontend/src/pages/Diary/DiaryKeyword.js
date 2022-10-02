import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import axios from "axios";

// css
import "./Diary.scss";
import { Button } from "@mui/material";
import Loading from "../../util/Loading";

const DiaryKeyword = () => {
  const [loading, setLoading] = useState(true);
  const username = useSelector((state) => state.auth.username);
  const navigate = useNavigate();
  const location = useLocation();
  const { image } = location.state;

  // 단어 데이터
  const [wordList, setWordList] = useState([]);

  // 선택된 단어
  const [checkedList, setCheckedLists] = useState([]);

  // 단어 추천 함수
  const wordRecommend = async() => {
    const formData = new FormData()
    formData.append('image', image.image_file)

    const res = await axios({
      method: 'post',
      url: 'https://j7d209.p.ssafy.io/ai-api/diaries/keywords/',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setWordList(res.data.data);
    setLoading(false);
  }

  useEffect(() => {
    wordRecommend();
  })

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
              {username} 님이 고르신 사진이네요
              <br/>
              일기장에 쓸 단어를 골라볼까요?
            </div>

            {/* 사진 */}
            <div className="img-body">
              <img src={image.preview_URL} alt="이미지 없음"/>
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
                  onClick={() => navigate("/diarywriting", {state : { image : image, checkedList : checkedList }})}
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
      )}
    </div>
  );
}

export default DiaryKeyword;