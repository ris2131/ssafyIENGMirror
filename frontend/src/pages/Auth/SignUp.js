import { useState, useRef } from "react";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { TbCameraPlus } from "react-icons/tb";
import { Toast } from "../../assets/Toast";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SingUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LogoText = styled.div`
  font-weight: 600;
  font-size: 80px;
  color: #ffca28;
  margin-bottom: 20px;
`;

const InputDiv = styled.div`
  @media screen and (max-width: 640px) {
    width: 80%;
  }
  width: 30%;
  margin-bottom: 10px;
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
  width: 30%;
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
  padding: 10px;
  margin: 10px;
  width: 30%;
`;
const SButton2 = styled.button`
  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  @media screen and (max-width: 640px) {
    width: 80px;
    height: 80px;
  }

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

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
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
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const date = [...Array(12)].map((v, i) => i + 1);

  const inputRef = useRef();

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

  // 월 변경
  const handleChange = (e) => {
    setMonth(e.target.value);
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
    };

    const formData = new FormData();

    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    formData.append("data", blob);
    formData.append("profile", profile);
  };

  return (
    <SingUpBox>
      <LogoText>IEng</LogoText>
      {page === 1 ? (
        <>
          <InputDiv>
            <TextField
              fullWidth
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
              label="인증번호 입력"
              variant="standard"
              value={emailCheck}
              onChange={(e) => setEmailCheck(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <TextField
              fullWidth
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
        </>
      ) : (
        <>
          <InputDiv>
            <ProfileContainer>
              <ProfileSection>
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
                  ref={inputRef}
                  style={{ display: "none" }}
                />
                <div style={{ fontSize: "20px", marginTop: "5px" }}>
                  <TbCameraPlus
                    onClick={() => inputRef.current.click()}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </ProfileSection>
            </ProfileContainer>
          </InputDiv>
          <InputDiv>
            <TextField
              fullWidth
              label="닉네임"
              variant="standard"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputDiv>
          <DateWrapper>
            <InputDiv>
              <TextField
                fullWidth
                label="년(4자)"
                variant="standard"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <InputLabel id="demo-simple-select-standard-label">월</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChange}
                label="월"
              >
                {date.map((v, i) => (
                  <MenuItem value={v} key={i}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </InputDiv>
            <InputDiv>
              <TextField
                fullWidth
                label="일"
                variant="standard"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </InputDiv>
          </DateWrapper>
          <IconDiv onClick={handlePage}>
            <GrLinkPrevious />
            <SButton onClick={handleSubmit}>회원가입</SButton>
          </IconDiv>
        </>
      )}
    </SingUpBox>
  );
};

export default SignUp;
