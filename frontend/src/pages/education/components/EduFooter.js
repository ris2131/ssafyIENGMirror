import styled from "styled-components";
import { BiVolumeFull, BiMicrophone } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDiv = styled.div`
  font-size: 50px;
  cursor: pointer;
`;

const EduFooter = () => {
  return (
    <Container>
      <IconDiv>
        <BiVolumeFull />
      </IconDiv>
      <IconDiv>
        <BiMicrophone />
      </IconDiv>
    </Container>
  );
};

export default EduFooter;
