// import { useState } from "react";

import styled from "styled-components";
// import Swal from "sweetalert2";
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

const QuizContent = () => {
  // const [num, setNum] = useState(1);

  return (
    <Container>
      <ContentDiv>
        <div>IMAGE</div>
      </ContentDiv>
      {/* <div>{num}/3</div> */}
    </Container>
  );
};

export default QuizContent;
