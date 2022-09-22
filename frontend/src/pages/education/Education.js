import NavBar from "../../components/NavBar";

import styled from "styled-components";
import EduContent from "./components/EduContent";
import EduFooter from "./components/EduFooter";

import { useParams } from "react-router-dom";

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

const Education = () => {
  const { category } = useParams();

  return (
    <>
      <Container back={category === "word" ? "#fef3ed" : "#FFFAC6"}>
        <NavBar />
        <TitleDiv>
          <p>APPLE</p>
        </TitleDiv>
        <EduContent category={category} />
        <EduFooter quiz={false} />
      </Container>
    </>
  );
};

export default Education;
