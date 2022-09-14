import styled from "styled-components";
import { BiVolumeFull, BiMicrophone } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 50px;
  cursor: pointer;
`;

const Pdiv = styled.div`
  position: relative;
`;

const Cdiv = styled.div`
  position: absolute;
  top: -30px;
  left: 50px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px 20px 20px 0px;
  width: 200%;
  height: 40px;
  background-color: white;
  padding: 5px;
`;

const TextP = styled.p`
  font-size: 25px;
`;

const Icon = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

const EduFooter = ({ quiz }) => {
  const [open, setOpen] = useState(false);
  // const [status, setStatus] = useState(false);

  const handleMic = () => {
    // setStatus(!status);
    // status
    //   ? navigator.mediaDevices
    //       .getUserMedia({ audio: true })
    //       .then(console.log("hi"))
    //       :
    //       media.stop()
    setOpen(!open);
  };

  return (
    <Container>
      {quiz ? null : (
        <IconDiv>
          <BiVolumeFull />
          <TextP>듣기</TextP>
        </IconDiv>
      )}

      <Pdiv>
        <IconDiv>
          <BiMicrophone onClick={handleMic} />
          <TextP>말하기</TextP>
        </IconDiv>
        <Cdiv>
          {open ? (
            <TextDiv>
              <TextP>text</TextP>
              <Icon>
                <FaRegPaperPlane />
              </Icon>
            </TextDiv>
          ) : null}
        </Cdiv>
      </Pdiv>
    </Container>
  );
};

export default EduFooter;
