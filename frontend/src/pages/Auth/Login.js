import styled from "styled-components";
import TextField from "@mui/material/TextField";

import { mobileback } from "../../assets/BackgroundImg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../OauthLogin/GoogleLogin";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthSlice";

const backgroundImage = process.env.PUBLIC_URL + `/assets/background2.jpg`;

const LoginContainer = styled.div`
  @media screen and (max-width: 821px) {
    background-image: url(${mobileback});
  }

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
  @media screen and (max-width: 821px) {
    width: 70px;
    height: 70px;
  }

  width: 100px;
  height: 100px;
  margin: 10px;
`;

const LogoText = styled.h1`
  @media screen and (max-width: 821px) {
    font-size: 50px;
  }

  font-size: 80px;
  font-family: OKDDUNG;
  color: #ffca28;
  margin: 10px;
`;

const InputDiv = styled.div`
  @media screen and (max-width: 821px) {
    width: 50vw;
  }

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
  cursor: pointer;
`;

const IconDiv2 = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-top: 1px solid #ececec;
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
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const data = {
      username,
      password,
    };

    dispatch(login(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

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
            label="ID(email)"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputDiv>
        <SButton onClick={handleSubmit}>로그인</SButton>
        <IconDiv2>
          <GoogleLogin text="로그인" />
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
