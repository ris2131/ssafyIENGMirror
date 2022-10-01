import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  checkEmail,
  confirmEmail,
  sendEmail,
  signup,
} from "../../redux/AuthSlice";
import { Toast } from "../../assets/Toast";

import GoogleTest from "../OauthLogin/GoogleTest";

// style
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { TbCameraPlus } from "react-icons/tb";
import { mobileback } from "../../assets/BackgroundImg";
import Swal from "sweetalert2";
import Timer from "./Timer";

const backgroundImage = process.env.PUBLIC_URL + `/assets/background2.jpg`;

const SingUpBox = styled.div`
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

const FlexInputDiv = styled.div`
  @media screen and (max-width: 821px) {
    width: 50vw;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  margin-bottom: 10px;
  cursor: pointer;
`;

const CheckButton = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.back};
  padding: 5px;
  color: white;
  width: 100px;
  cursor: ${(props) => props.pointer};
`;

const InputDiv = styled.div`
  @media screen and (max-width: 821px) {
    width: 50vw;
  }
  width: 20vw;
  width: ${(props) => props.width};
  margin-bottom: 10px;
`;

const IconDiv = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SButton = styled.button`
  @media screen and (max-width: 821px) {
    width: 50vw;
  }

  border-radius: 20px;
  color: white;
  border: none;
  background-color: #42a5f5;
  padding: 8px;
  margin: 10px 0px;
  width: 20vw;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const DateWrapper = styled.div`
  @media screen and (max-width: 821px) {
    width: 50vw;
  }

  display: flex;
  justify-content: space-between;
  width: 20vw;
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
  const [month, setMonth] = useState("월");
  const [day, setDay] = useState("");
  const [emailPass, setEmailPass] = useState(false);
  const [timeOn, setTimeOn] = useState(true);

  // 타이머
  // const [min, setMin] = useState(5);
  // const [sec, setSec] = useState(0);
  // const time = useRef(300);
  // const timerId = useRef(null);

  // 이메일 유효성 확인
  const [emailStatus, setEmailStatus] = useState(false);

  const monthList = [...Array(12)].map((v, i) => i + 1);
  const date = ["월", ...monthList];

  const inputRef = useRef();
  const nicknameRef = useRef();

  const dispatch = useDispatch();

  const handlePage = () => {
    if (!emailPass) {
      Swal.fire({ icon: "error", title: "이메일 인증이 필요해요!" });
      return;
    } else {
      if (page === 1) {
        setPage(2);
      } else setPage(1);
    }
  };

  const changeImg = (e) => {
    console.log(profile);
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

  // 년 변경
  const handleYear = (e) => {
    if (e.target.value > 2022 || isNaN(Number(e.target.value))) {
      Toast.fire({
        icon: "error",
        title: "1900~2022까지의 숫자만 입력가능해요",
      });
      return;
    }
    setYear(e.target.value);
  };

  // 월 변경
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  // 일 변경
  const handleDay = (e) => {
    if (e.target.value > 31) {
      Toast.fire({
        icon: "error",
        title: "날짜는 31일까지 입력가능해요",
      });
      return;
    }
    setDay(e.target.value);
  };

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      Toast.fire({
        icon: "error",
        title: "비밀번호를 다시 확인해볼까요?",
      });
      return;
    }

    if (year < 1900) {
      Toast.fire({
        icon: "error",
        title: "1900~2022까지 입력가능해요",
      });
      return;
    }

    const mm = month >= 10 ? month : "0" + month;
    const dd = day >= 10 ? day : "0" + day;

    const birth = year + "-" + mm + "-" + dd;

    const data = {
      provider: "ieng",
      username: email,
      password,
      nickname,
      birth_YMD: birth,
    };

    dispatch(signup(data))
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // const formData = new FormData();

    // const blob = new Blob([JSON.stringify(data)], {
    //   type: "application/json",
    // });

    // formData.append("data", blob);
    // formData.append("profile", profile);
  };

  // 이메일 형식 체크 함수
  const handleEmailCheck = (email) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const check = !emailRegex.test(email) ? false : true;
    setEmailStatus(check);
  };

  // 인증번호 받기

  const handleSendMail = () => {
    const data = {
      email,
    };
    dispatch(sendEmail(data))
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const getCode = () => {
    if (!emailStatus) {
      Swal.fire({ icon: "error", title: "이메일 형식이 올바르지 않습니다" });
      return;
    }
    const data = {
      email,
    };
    dispatch(checkEmail(data))
      .unwrap()
      .then((res) => {
        if (res.status === "SUCCESS") {
          handleSendMail();
          setTimeOn(true);
        } else Swal.fire({ icon: "error", title: "이미 가입한 이메일입니다." });
      })
      .catch((err) => console.error(err));
  };

  // 인증번호 확인
  const confirmCode = () => {
    const data = {
      certification_number: emailCheck,
    };
    console.log(data);

    dispatch(confirmEmail(data))
      .unwrap()
      .then(() => {
        Swal.fire({ icon: "success", title: "인증이 완료되었습니다." });
        setEmailPass(true);
        setTimeOn(false);
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "인증번호를 다시 확인해주세요." });
        setEmailPass(false);
      });
  };

  // useEffect(() => {
  //   timerId.current = setInterval(() => {
  //     setMin(parseInt(time.current / 60));
  //     setSec(time.current % 60);
  //     time.current -= 1;
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   if (time.current <= 0) {
  //     window.alert("인증시간이 초과하였습니다.");
  //     clearInterval(timerId.current);
  //   }
  //   return () => clearInterval(timerId.current);
  // }, [sec]);

  return (
    <SingUpBox>
      <LogoDiv>
        <LogoImg src={process.env.PUBLIC_URL + `/assets/logo.png`} alt="#" />
        <LogoText>IEng</LogoText>
      </LogoDiv>
      {page === 1 ? (
        <>
          <InputDiv>
            <TextField
              fullWidth
              label="ID (email)"
              variant="standard"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleEmailCheck(e.target.value);
              }}
            />
            <SButton
              onClick={() => {
                getCode();
              }}
            >
              인증코드 받기
            </SButton>
          </InputDiv>
          <FlexInputDiv>
            <TextField
              fullWidth
              label="인증번호 입력"
              variant="standard"
              value={emailCheck}
              onChange={(e) => setEmailCheck(e.target.value)}
            />
            {timeOn ? <Timer setTimeOn={setTimeOn} /> : null}
            {emailPass ? (
              <CheckButton back="#bdbdbd">완료</CheckButton>
            ) : (
              <CheckButton
                onClick={confirmCode}
                pointer="pointer"
                back="#42a5f5"
              >
                확인
              </CheckButton>
            )}
          </FlexInputDiv>
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
              onKeyPress={(e) => (e.key === "Enter" ? setPage(2) : null)}
            />
          </InputDiv>

          <IconDiv>
            <GrLinkNext onClick={handlePage} />
          </IconDiv>
          <GoogleTest />
        </>
      ) : (
        <>
          <h1>프로필 입력</h1>
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
              ref={nicknameRef}
              variant="standard"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputDiv>
          <DateWrapper>
            <InputDiv width="7vw">
              <TextField
                fullWidth
                label="년(4자)"
                variant="standard"
                value={year}
                onChange={handleYear}
              />
            </InputDiv>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={month}
              onChange={handleMonth}
              label="월"
            >
              {date.map((v, i) => (
                <MenuItem value={v} key={i}>
                  {v}
                </MenuItem>
              ))}
            </Select>

            <InputDiv width="7vw">
              <TextField
                fullWidth
                label="일"
                variant="standard"
                value={day}
                onChange={handleDay}
              />
            </InputDiv>
          </DateWrapper>
          <IconDiv>
            <GrLinkPrevious onClick={handlePage} />
          </IconDiv>
          <SButton onClick={handleSubmit}>회원가입</SButton>
        </>
      )}
    </SingUpBox>
  );
};

export default SignUp;
