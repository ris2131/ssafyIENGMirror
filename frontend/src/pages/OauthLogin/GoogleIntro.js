import { TextField } from "@mui/material";
import { googleback } from "../../assets/BackgroundImg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { googleNickname } from "../../redux/AuthSlice";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  background-image: url(${googleback});
  background-size: 100vw 100vh;
  font-family: KOTRAHOPE;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 350px;
  position: relative;
`;

const Post = styled.div`
  position: absolute;
  background-color: #ececec;
  width: 80px;
  height: 30px;
  z-index: 1;
  top: -15px;
  left: auto;
`;

const InputBox = styled.div`
  margin: 5px 0px;
`;

const MyButton = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #42a5f5;
  padding: 10px;
  margin-top: 40px;
  width: 60px;
  font-size: 14px;
  cursor: pointer;
`;

const GoogleIntro = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const handleSubmit = () => {
    const data = {
      ...location.state,
      provider: "google",
      nickname,
      birth_YMD: birth,
    };
    dispatch(googleNickname(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);
  return (
    <Container>
      <Wrapper>
        <Post />
        <h1>추가정보입력</h1>
        <InputBox>
          <TextField
            label="닉네임"
            variant="standard"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <TextField
            label="생년월일(YYYY-MM-DD)"
            variant="standard"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </InputBox>
        <MyButton onClick={handleSubmit}>전송</MyButton>
      </Wrapper>
    </Container>
  );
};

export default GoogleIntro;
