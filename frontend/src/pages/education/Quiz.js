import NavBar from "../../components/NavBar";
import styled from "styled-components";
import QuizContent from "./components/QuizContent";
import EduFooter from "./components/EduFooter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fef3ed;
  height: 100vh;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Quiz = () => {
  return (
    <Container>
      <NavBar />
      <TitleDiv>맞춰볼까요?</TitleDiv>
      <QuizContent />
      <EduFooter quiz={true} />
    </Container>
  );
};

export default Quiz;
