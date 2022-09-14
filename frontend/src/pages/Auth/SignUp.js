import { useState } from "react";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Toast } from "../../assets/Toast";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SingUpBox = styled.div`
  display: flex;
  width: 70vw;
  height: 70vh;
  border: 1px solid #ececec;
  border-radius: 15px;
`;

const LeftDiv = styled.div`
  width: 40vw;
  background-image: url("https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898_960_720.jpg");
  background-size: cover;
  border-radius: 15px 0px 0px 15px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 35vw;
  padding: 10px;
`;

const InputDiv = styled.div`
  width: 70%;
  margin-bottom: 10px;
`;

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDiv = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

const SButton = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 5px;
  margin: 10px;
  width: 30%;
`;
const SButton2 = styled.button`
  width: 100%;
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 5px;
  margin: 10px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-bottom: 20px;
  padding: 10px 0px;
`;

const ProfileBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 15px;
`;

const Profileimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const LogoImage = styled.img`
  margin: 20px;
  width: 30%;
`;
const SignUp = () => {
  const logoImage = process.env.PUBLIC_URL + `/assets/logo.png`;

  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [profile, setProfile] = useState("");
  const [preview, setPreview] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");

  const [page, setPage] = useState(1);

  const handlePage = () => {
    if (page === 1) {
      setPage(2);
    } else setPage(1);
  };

  const changeImg = (e) => {
    setProfile(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      Toast.fire({
        icon: "error",
        title: "비밀번호를 다시 확인해볼까요?",
      });
      return;
    }
    const data = {
      email,
      password,
      nickname,
      birth,
    };

    const formData = new FormData();

    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    formData.append("data", blob);
    formData.append("profile", profile);
  };

  return (
    <SignUpContainer>
      <SingUpBox>
        <LeftDiv></LeftDiv>
        {page === 1 ? (
          <RightDiv>
            <Sdiv>
              <LogoImage src={logoImage} alt="#"></LogoImage>
            </Sdiv>
            <InputDiv>
              <TextField
                fullWidth
                id="standard-basic"
                label="ID (email)"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <SButton2>인증번호 보내기</SButton2>
              <TextField
                fullWidth
                id="standard-basic"
                label="인증번호 입력"
                variant="standard"
                value={emailCheck}
                onChange={(e) => setEmailCheck(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <TextField
                fullWidth
                id="standard-basic"
                label="password"
                type="password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <TextField
                fullWidth
                id="standard-basic"
                label="password check"
                type="password"
                variant="standard"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </InputDiv>

            <IconDiv onClick={handlePage}>
              <GrLinkNext />
            </IconDiv>
            <IconDiv2>
              <IconDiv3>
                <FcGoogle />
              </IconDiv3>
              <p> Google로 로그인</p>
            </IconDiv2>
          </RightDiv>
        ) : (
          <>
            <RightDiv>
              <Sdiv>
                <LogoImage src={logoImage} alt="#"></LogoImage>
              </Sdiv>
              <InputDiv>
                <ProfileContainer>
                  <ProfileBox>
                    <Profileimg src={preview} alt="" />
                  </ProfileBox>
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => {
                      changeImg(e);
                      encodeFileToBase64(e.target.files[0]);
                    }}
                  />
                </ProfileContainer>
              </InputDiv>
              <InputDiv>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="닉네임"
                  variant="standard"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="생년월일"
                  variant="standard"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />

                <IconDiv onClick={handlePage}>
                  <GrLinkPrevious />
                  <SButton onClick={handleSubmit}>회원가입</SButton>
                </IconDiv>
              </InputDiv>
            </RightDiv>
          </>
        )}
      </SingUpBox>
    </SignUpContainer>
  );
};

export default SignUp;
