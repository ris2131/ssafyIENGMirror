import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";

import TextField from "@mui/material/TextField";

const backgroundImage = process.env.PUBLIC_URL + `/assets/background2.jpg`;

const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: 100vw 100vh;
`;

const LockIcon = styled.div`
  margin-top: 20vh;
  font-size: 100px;
`;

const StyledP = styled.p`
  font-size: 30px;
`;

const InputDiv = styled.div`
  width: 20%;
  margin-bottom: 10px;
`;

const SButton = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 10px;
  margin-top: 40px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
`;

const ForgotPassword = () => {
  return (
    <ForgotContainer>
      <LockIcon>
        <AiFillLock />
      </LockIcon>
      <StyledP>찾고자 하는 계정을 입력해주세요</StyledP>
      <InputDiv>
        <TextField
          fullWidth
          id="standard-basic"
          label="ID (email)"
          variant="standard"
          type="email"
        />
        <SButton>인증번호 전송하기</SButton>
      </InputDiv>
    </ForgotContainer>
  );
};

export default ForgotPassword;
