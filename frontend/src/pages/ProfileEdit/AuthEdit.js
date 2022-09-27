import { useState, useEffect, useCallback } from "react";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { authApi } from "../../shared/authApi";
import ButtonFooter from "./ButtonFooter";
import Swal from "sweetalert2";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;
const PimgBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;
`;

const Pimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgTextBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
`;

const ImgText = styled.p`
  font-size: 16px;
  margin: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const MenuText = styled.p`
  font-size: 20px;
  width: 200px;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const AuthEdit = ({ originData }) => {
  const [preview, setPreview] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");

  const fetchState = useCallback(() => {
    setEmail(originData.email);
    setNickname(originData.nickname);
    setBirth(originData.birth_YMD);
  }, [originData]);

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handleBirth = (e) => {
    setBirth(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      nickname,
      birth_YMD: birth,
    };

    authApi
      .putuser(data)
      .then(() =>
        Swal.fire({ icon: "success", title: "수정이 완료되었습니다!" })
      );
  };

  useEffect(() => {
    fetchState();
  }, [fetchState]);

  return (
    <>
      <ImgWrapper>
        <MenuText>프로필 사진</MenuText>
        <PimgBox>
          <Pimg src={preview} alt="#"></Pimg>
        </PimgBox>
        <ImgTextBox>
          <ImgText color="#42a5f5" onClick={() => setPreview(preview)}>
            변경
          </ImgText>
          <ImgText>삭제</ImgText>
        </ImgTextBox>
      </ImgWrapper>
      <MenuBox>
        <MenuText>email</MenuText>
        <TextField
          disabled
          variant="standard"
          style={{ width: "30%" }}
          value={email || ""}
        />
      </MenuBox>
      <MenuBox>
        <MenuText>닉네임</MenuText>
        <TextField
          variant="standard"
          style={{ width: "30%" }}
          value={nickname || ""}
          onChange={handleNickname}
        />
      </MenuBox>
      <MenuBox>
        <MenuText>생년월일</MenuText>
        <TextField
          variant="standard"
          style={{ width: "30%" }}
          value={birth || ""}
          onChange={handleBirth}
        />
      </MenuBox>
      <ButtonFooter handleSubmit={handleSubmit} />
    </>
  );
};

export default AuthEdit;
