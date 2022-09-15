import NavBar from "../../components/NavBar";
import styled from "styled-components";
import QuizContent from "./components/QuizContent";
import EduFooter from "./components/EduFooter";
import { useState } from "react";
import Success from "./components/Success";
import Fail from "./components/Fail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.back};
  height: 100vh;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Quiz = () => {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [num, setNum] = useState(1);

  return (
    <Container back={success ? "#A5D6A7" : fail ? "#FFA270" : "#fef3ed"}>
      <NavBar />
      <TitleDiv>맞춰볼까요?</TitleDiv>
      <QuizContent />
      <EduFooter quiz={true} setSuccess={setSuccess} setFail={setFail} />
      {success ? <Success setSuccess={setSuccess} setNum={setNum} /> : null}
      {fail ? <Fail setFail={setFail} setNum={setNum} /> : null}
    </Container>
  );
};

export default Quiz;
