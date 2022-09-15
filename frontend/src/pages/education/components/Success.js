import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextDiv = styled.div`
  font-size: 80px;
  font-weight: bold;
  margin-top: 40px;
`;

const Success = ({ setNum, setSuccess }) => {
  return (
    <Container>
      <TextDiv>참 잘했어요!</TextDiv>
      <TextDiv>
        <BsArrowRightCircle
          style={{ cursor: "pointer" }}
          onClick={() => setSuccess(false)}
        />
      </TextDiv>
    </Container>
  );
};

export default Success;
