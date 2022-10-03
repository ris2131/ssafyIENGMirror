import styled from "styled-components";

import { useState, useEffect } from "react";
import { diaryApi } from "../../../shared/diaryApi";
import { format } from "date-fns";
import { studyApi } from "../../../shared/studyApi";
import EduHeader from "./EduHeader";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  width: 50%;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 5px 0px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`;

const DiaryImg = styled.img`
  width: 100%;
  height: 100%;
  over-fit: cover;
`;

const DiaryMsg = styled.div`
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  margin-top: 20px;
`;

const DiaryButton = styled.button`
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #2196f3;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const WordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 40%;
  padding: 10px;
`;

const SentenceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60%;
  padding: 10px;
`;

const Boxtitle = styled.div`
  font-size: 20px;
  background-color: ${(props) => props.back};
  padding: 3px;
  width: 100%;
  text-align: start;
`;

const RowBox = styled.div`
  margin: 5px;
  font-size: 16px;
`;

const ImojiBox = styled.div`
  margin: 2px;
  font-size: 18px;
`;

const testImg = process.env.PUBLIC_URL + `/assets/testimage.jpg`;

const EduHistory = ({ date }) => {
  const [category, setCategory] = useState("diary");
  const [initData, setInitData] = useState("");
  const today = format(new Date(), "yyyy-MM-dd");
  const same = date === today ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (category === "diary") {
      const getData = async () => {
        const res = await diaryApi.getdiary(date);
        setInitData(res.data.data);
        console.log(res.data.data.diaryPicturePath);
      };
      getData();
    } else {
      const getData = async () => {
        const res = await studyApi.gethistory(date);
        setInitData(res.data.data);
      };
      getData();
    }
  }, [date, category]);

  return (
    <Container>
      <EduHeader category={category} setCategory={setCategory} />
      {category === "diary" ? (
        <HeaderBox>
          {initData?.diaryPicturePath !== null ? (
            <div>
              <div>
                <DiaryImg src={testImg} alt="#"></DiaryImg>
              </div>
              <div>{initData?.diaryContent}</div>
              <div>{initData?.diaryEmotion}</div>
              <div>
                {initData?.diaryKeywordList?.map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
              </div>
            </div>
          ) : same ? (
            <div>
              <DiaryMsg>오늘 일기를 적으러 가볼까요?</DiaryMsg>
              <DiaryButton onClick={() => navigate("/diarystart")}>
                Go !
              </DiaryButton>
            </div>
          ) : (
            <DiaryMsg>이 날은 일기를 안 적었네요</DiaryMsg>
          )}
        </HeaderBox>
      ) : (
        <HeaderBox>
          <WordDiv>
            <Boxtitle back="#ffcc80">🧡단어</Boxtitle>
            <ImojiBox>😀</ImojiBox>
            {initData?.correctWordList?.length === 0 ? (
              <RowBox>맞춘 단어가 없어요</RowBox>
            ) : (
              initData?.correctWordList?.map((v, i) => (
                <RowBox key={i}>:{v.word}</RowBox>
              ))
            )}
            <ImojiBox>😢</ImojiBox>
            {initData?.incorrectWordList?.length === 0 ? (
              <RowBox>틀린 단어가 없어요</RowBox>
            ) : (
              initData?.incorrectWordList?.map((v, i) => (
                <RowBox key={i}>{v.word}</RowBox>
              ))
            )}
          </WordDiv>
          <SentenceDiv>
            <Boxtitle back="#81d4fa">💙문장</Boxtitle>
            <ImojiBox>😀</ImojiBox>
            {initData?.correctSentenceList?.length === 0 ? (
              <RowBox>맞춘 문장이 없어요</RowBox>
            ) : (
              initData?.correctSentenceList?.map((v, i) => (
                <RowBox key={i}>{v.sentence}</RowBox>
              ))
            )}
            <ImojiBox>😢</ImojiBox>
            {initData?.incorrectSentenceList?.length === 0 ? (
              <RowBox>틀린 문장이 없어요</RowBox>
            ) : (
              initData?.incorrectSentenceList?.map((v, i) => (
                <RowBox key={i}>{v.sentence}</RowBox>
              ))
            )}
          </SentenceDiv>
        </HeaderBox>
      )}
    </Container>
  );
};

export default EduHistory;
