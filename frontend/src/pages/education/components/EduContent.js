import styled from "styled-components";
import Swal from "sweetalert2";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { eduActions } from "./../../../redux/EduSlice";

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EduFooter from "./EduFooter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

const ArrowDiv = styled.div`
  font-size: 100px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const url = process.env.PUBLIC_URL;

// 여기서 image, 받아와야겠지?
const EduContent = ({ category, originData }) => {
  const wordCurrent = useSelector((state) => state.edu.word);
  const sentenceCurrent = useSelector((state) => state.edu.sentence);

  const [quiz, setQuiz] = useState(false);
  const [word, setWord] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (category === "word" ? wordCurrent < 3 : sentenceCurrent < 3) {
      dispatch(eduActions.goNext(category));
    }

    if (category === "word" ? wordCurrent === 3 : sentenceCurrent === 3) {
      Swal.fire({
        title: `학습이 다 끝났어요`,
        text: "퀴즈 풀러갈까요?",
        icon: "success",

        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
        cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
        confirmButtonText: "네", // confirm 버튼 텍스트 지정
        cancelButtonText: "아니요", // cancel 버튼 텍스트 지정

        // reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/${category}/quiz`);
        } else setQuiz(false);
      });
    }
  };

  const handlePrev = () => {
    if (category === "word" ? wordCurrent > 1 : sentenceCurrent > 1) {
      dispatch(eduActions.goPrev(category));
    }
  };

  const setInit = useCallback(() => {
    if (originData !== undefined) {
      category === "word"
        ? setWord(originData[wordCurrent - 1].word)
        : setWord(originData[sentenceCurrent - 1].sentence);
    }
  }, [originData, wordCurrent, sentenceCurrent, category]);

  useEffect(() => {
    setInit();
  }, [setInit]);

  return (
    <>
      <TitleDiv>{originData && word}</TitleDiv>

      <Container>
        {quiz ? null : (
          <>
            <ContentDiv>
              <ArrowDiv>
                <AiOutlineLeft onClick={handlePrev} />
              </ArrowDiv>
              <StyledImg
                src={
                  category === "word"
                    ? url + `/assets/word.jpg`
                    : url + `/assets/sentence.jpg`
                }
                alt="#"
              ></StyledImg>
              <ArrowDiv>
                <AiOutlineRight onClick={handleNext} />
              </ArrowDiv>
            </ContentDiv>
            <div>{category === "word" ? wordCurrent : sentenceCurrent}/3</div>
            <EduFooter quiz={false} word={word} />
          </>
        )}
      </Container>
    </>
  );
};

export default EduContent;
