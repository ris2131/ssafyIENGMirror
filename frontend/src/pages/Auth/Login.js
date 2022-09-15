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
  border-radius: 15px;
  // padding: 40px;
`;

const LeftDiv = styled.div`
  @media screen and (max-width: 640px) {
    display: none;
  }
  width: 40vw;
  background-image: url("https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898_960_720.jpg");
  background-size: cover;
  border-radius: 15px 0px 0px 15px;
`;
const RightDiv = styled.div`
  @media screen and (max-width: 640px) {
    width: 100vw;
  }
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 35vw;
`;

const InputDiv = styled.div`
  width: 70%;
  margin-bottom: 10px;
`;

const SButton = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 8px;
  margin-top: 40px;
  width: 30%;
`;

const IconDiv2 = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
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

const LogoImage = styled.img`
  margin: 20px;
  width: 30%;
`;

const Login = () => {
  const navigate = useNavigate();
  const logoImage = process.env.PUBLIC_URL + `/assets/logo.png`;

  return (
    <LoginContainer>
      <LoginBox>
        <LeftDiv></LeftDiv>
        <RightDiv>
          <LogoImage src={logoImage} alt="#"></LogoImage>
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
        </RightDiv>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
