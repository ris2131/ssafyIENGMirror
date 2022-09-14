import { useState } from "react";

import styled from "styled-components";
// import Swal from "sweetalert2";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { eduActions } from "./../../../redux/EduSlice";

// import { useNavigate, useParams } from "react-router-dom";

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

const QuizContent = () => {
  const [num, setNum] = useState(1);
  const handleNext = () => {
    if (0 < parseInt(num) && parseInt(num) < 3) {
      setNum((prev) => (prev += 1));
    }
  };

  const handlePrev = () => {
    if (1 < parseInt(num) && parseInt(num) < 4) {
      setNum((prev) => (prev -= 1));
    }
  };
  return (
    <Container>
      <ContentDiv>
        <ArrowDiv>
          <AiOutlineLeft onClick={handlePrev} />
        </ArrowDiv>
        <div>IMAGE</div>
        <ArrowDiv>
          <AiOutlineRight onClick={handleNext} />
        </ArrowDiv>
      </ContentDiv>
      <div>{num}/3</div>
    </Container>
  );
};

export default QuizContent;
