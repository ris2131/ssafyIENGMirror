import NavBar from "../../components/NavBar";

import styled from "styled-components";
import EduContent from "./components/EduContent";
import EduFooter from "./components/EduFooter";

// import { useParams } from "react-router-dom";

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  background-color: #fef3ed;
  height: 100vh;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Education = () => {
  // const { category } = useParams();
  return (
    <>
      <Container>
        <NavBar />
        <TitleDiv>
          <p>TITLE</p>
        </TitleDiv>
        <EduContent />
        <EduFooter />
      </Container>
    </>
  );
};

export default Education;
