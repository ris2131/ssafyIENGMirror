import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  width: 70vw;
  height: 70vh;
  border: 1px solid #ececec;
`;

const LeftDiv = styled.div`
  width: 35vw;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 35vw;
`;

const InputDiv = styled.div`
  width: 50%;
  margin-bottom: 10px;
`;

const SButton = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 5px;
  margin-top: 40px;
  width: 50%;
`;

const IconDiv2 = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-top: 1px solid #ececec;
`;

const IconDiv3 = styled.div`
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const StyledP = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const FooterDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LoginBox>
        <LeftDiv>L</LeftDiv>
        <RightDiv>
          <h1>아Eng</h1>
          <InputDiv>
            <TextField
              fullWidth
              id="standard-basic"
              label="ID(email)"
              variant="standard"
            />
          </InputDiv>
          <InputDiv>
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </InputDiv>
          <SButton>로그인</SButton>
          <IconDiv2>
            <IconDiv3>
              <FcGoogle />
            </IconDiv3>
            <p> Google로 로그인</p>
          </IconDiv2>
          <FooterDiv>
            <StyledP>비밀번호 찾기</StyledP>
            <StyledP onClick={() => navigate("/signup")}>회원가입</StyledP>
          </FooterDiv>
        </RightDiv>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
