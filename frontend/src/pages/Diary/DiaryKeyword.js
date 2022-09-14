import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";
import { Button } from "@mui/material";

// 임시 단어 데이터
const data = [
  {id : 1, data : "aaa"},
  {id : 2, data : "bbb"},
  {id : 3, data : "ccc"},
  {id : 4, data : "ddd"},
];

const DiaryKeyword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { preview_URL } = location.state;

  const [checkedList, setCheckedLists] = useState([]);

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];

        data.forEach((list) => checkedListArray.push(list));

        setCheckedLists(checkedListArray);

      } else {
        setCheckedLists([]);
      }
    },
    []
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);

      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  return (
    <div>
      <NavBar />

      <div className="diary-wrapper">
        {/* 머리글 */}
        <div className="diary-header">
          00 님이 고르신 사진이네요
          <br/>
          일기장에 쓸 단어를 골라볼까요?
        </div>

        {/* 사진 */}
        <div className="diary-body">
          <img src={preview_URL} alt="이미지 없음"/>
          <div ></div>
        </div>

        {/* 단어 선택 */}
        <div class="keyword-check">
          {/* 전체 선택 */}
          <div class="check-button">
            <input
              type="checkbox"
              onChange={(e) => onCheckedAll(e.target.checked)}
              checked={
                checkedList.length === 0
                  ? false
                  : checkedList.length === data.length
                  ? true
                  : false
              }
            />
            <span>전체 선택</span>
          </div>
          
          {/* 개별 선택 */}
          {data.map((list) => (
            <div class="check-button">
              <input
                key={list.id}
                type="checkbox"
                onChange={(e) => onCheckedElement(e.target.checked, list)}
                checked={checkedList.includes(list) ? true : false}
              />
              <span>{list.data}</span>
            </div>
          ))} 
        </div>
        
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/diarywriting", {state : { preview_URL : preview_URL, checkedList : "checkedList" }})}
            >
            일기 쓰러가기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiaryKeyword;