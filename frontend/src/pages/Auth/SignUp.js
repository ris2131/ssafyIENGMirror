import { useState } from "react";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Toast } from "../../assets/Toast";

const SignUpDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  border: 1px solid #ececec;
  padding: 10px;
`;

const InputDiv = styled.div`
  width: 50%;
`;

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-bottom: 20px;
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
  width: 50%;
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

const ProfileBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;
`;

const Profileimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SignUp = () => {
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
  };

  return (
    <SignUpDiv>
      <LeftDiv>L</LeftDiv>
      {page === 1 ? (
        <RightDiv>
          <Sdiv>
            <h1>아Eng</h1>
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
            <SButton2>인증번호 보내기</SButton2>
            <TextField
              fullWidth
              id="standard-basic"
              label="인증번호 입력"
              variant="standard"
              value={emailCheck}
              onChange={(e) => setEmailCheck(e.target.value)}
            />

            <TextField
              fullWidth
              id="standard-basic"
              label="password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="password check"
              type="password"
              variant="standard"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <IconDiv onClick={handlePage}>
              <GrLinkNext />
            </IconDiv>
            <IconDiv2>
              <IconDiv3>
                <FcGoogle />
              </IconDiv3>
              <p> Google로 로그인</p>
            </IconDiv2>
          </InputDiv>
        </RightDiv>
      ) : (
        <>
          <RightDiv>
            <Sdiv>
              <h1>아Eng</h1>
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
              <TextField
                fullWidth
                id="standard-basic"
                label="닉네임"
                variant="standard"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
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
              <IconDiv2>
                <IconDiv3>
                  <FcGoogle />
                </IconDiv3>
                <p> Google로 로그인</p>
              </IconDiv2>
            </InputDiv>
          </RightDiv>
        </>
      )}
    </SignUpDiv>
  );
};

export default SignUp;
