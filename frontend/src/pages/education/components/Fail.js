import styled from "styled-components";
import { BiVolumeFull } from "react-icons/bi";
import { VscRefresh } from "react-icons/vsc";
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
  margin: 10px;
  cursor: ${(props) => props.pointer};
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Fail = ({ setNum, setFail }) => {
  return (
    <Container>
      <TextDiv>다시 풀어볼까요?</TextDiv>
      <IconDiv>
        <TextDiv pointer="pointer">
          <BiVolumeFull />
        </TextDiv>
        <TextDiv pointer="pointer">
          <VscRefresh onClick={() => setFail(false)} />
        </TextDiv>
        <TextDiv pointer="pointer">
          <BsArrowRightCircle onClick={() => setFail(false)} />
        </TextDiv>
      </IconDiv>
    </Container>
  );
};

export default Fail;
