import TextField from "@mui/material/TextField";
import styled from "styled-components";

const MenuBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  width: 100%;
  margin: 20px 0;
`;

const MenuText = styled.p`
  font-size: 20px;
  width: 200px;
`;

const PasswordEdit = () => {
  return (
    <>
      <MenuBox>
        <MenuText>현재 비밀번호</MenuText>
        <TextField
          type="password"
          variant="standard"
          style={{ width: "30%" }}
        />
      </MenuBox>
      <MenuBox>
        <MenuText>새 비밀번호</MenuText>
        <TextField
          type="password"
          variant="standard"
          style={{ width: "30%" }}
        />
      </MenuBox>
      <MenuBox>
        <MenuText>새 비밀번호 확인</MenuText>
        <TextField
          type="password"
          variant="standard"
          style={{ width: "30%" }}
        />
      </MenuBox>
    </>
  );
};

export default PasswordEdit;
