import styled from "styled-components";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ContentDIv = styled.div`
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
  return (
    <Container>
      <ContentDIv>
        <ArrowDiv>
          <AiOutlineLeft />
        </ArrowDiv>
        <div>IMAGE</div>
        <ArrowDiv>
          <AiOutlineRight />
        </ArrowDiv>
      </ContentDIv>
      <div>1/3</div>
    </Container>
  );
};

export default EduContent;
