import styled from "styled-components";
import Swal from "sweetalert2";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { eduActions } from "./../../../redux/EduSlice";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
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

// 여기서 image, 받아와야겠지?
const EduContent = () => {
  const { category } = useParams();

  const wordCurrent = useSelector((state) => state.edu.word);
  // const sentenceCurrent = useSelector((state) => state.edu.sentence);

  const [quiz, setQuiz] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNext = () => {
    if (wordCurrent < 3) {
      dispatch(eduActions.goNext(category));
    }

    if (wordCurrent === 3) {
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
          navigate(`/edu/${category}/quiz`);
        } else setQuiz(false);
      });
    }
  };

  const handlePrev = () => {
    if (wordCurrent > 1) {
      dispatch(eduActions.goPrev(category));
    }
  };
  return (
    <Container>
      {quiz ? null : (
        <>
          <ContentDiv>
            <ArrowDiv>
              <AiOutlineLeft onClick={handlePrev} />
            </ArrowDiv>
            <div>IMAGE</div>
            <ArrowDiv>
              <AiOutlineRight onClick={handleNext} />
            </ArrowDiv>
          </ContentDiv>
          <div>{wordCurrent}/3</div>
        </>
      )}
    </Container>
  );
};

export default EduContent;
