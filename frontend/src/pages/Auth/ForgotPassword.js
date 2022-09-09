import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";

import TextField from "@mui/material/TextField";

const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LockIcon = styled.div`
  margin-top: 20px;
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
