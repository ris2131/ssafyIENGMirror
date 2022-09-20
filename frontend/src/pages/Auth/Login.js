import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

const backgroundImage = process.env.PUBLIC_URL + `/assets/background2.jpg`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: 100vw 100vh;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const LogoText = styled.h1`
  font-size: 80px;
  font-family: OKDDUNG;
  color: #ffca28;
  margin: 10px;
`;

const InputDiv = styled.div`
  width: 20vw;
  margin-bottom: 10px;
`;

const SButton = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 10px;
  margin-top: 40px;
  width: 20vw;
`;

const IconDiv2 = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
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
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <LoginContainer>
        <LogoDiv>
          <LogoImg
            src={process.env.PUBLIC_URL + `/assets/logo.png`}
            alt="#"
          ></LogoImg>
          <LogoText>IEng</LogoText>
        </LogoDiv>
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
          <StyledP onClick={() => navigate("/forgotpassword")}>
            비밀번호 찾기
          </StyledP>
          <StyledP onClick={() => navigate("/signup")}>회원가입</StyledP>
        </FooterDiv>
      </LoginContainer>
    </>
  );
};

export default Login;
