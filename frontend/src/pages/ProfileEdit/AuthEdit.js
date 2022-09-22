import { useState } from "react";

import styled from "styled-components";
import TextField from "@mui/material/TextField";

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
  align-items: end;
  width: 100%;
  margin: 20px 0;
`;

const AuthEdit = () => {
  const [preview, setPreview] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  return (
    <>
      <ImgWrapper>
        <MenuText>프로필 사진</MenuText>
        <PimgBox>
          <Pimg src={preview} alt="#"></Pimg>
        </PimgBox>
        <ImgTextBox>
          <ImgText color="#42a5f5">변경</ImgText>
          <ImgText>삭제</ImgText>
        </ImgTextBox>
      </ImgWrapper>
      <MenuBox>
        <MenuText>email</MenuText>
        <TextField variant="standard" style={{ width: "30%" }} />
      </MenuBox>
      <MenuBox>
        <MenuText>닉네임</MenuText>
        <TextField variant="standard" style={{ width: "30%" }} />
      </MenuBox>
      <MenuBox>
        <MenuText>생년월일</MenuText>
        <TextField variant="standard" style={{ width: "30%" }} />
      </MenuBox>
    </>
  );
};

export default AuthEdit;
