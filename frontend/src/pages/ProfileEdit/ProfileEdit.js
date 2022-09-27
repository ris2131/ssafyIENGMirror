import { useState, useEffect, useCallback } from "react";

import { backgroundImg } from "../../assets/BackgroundImg";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AuthEdit from "./AuthEdit";
import PasswordEdit from "./PasswordEdit";
import { authApi } from "../../shared/authApi";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImg});
  background-size: 100vw 100vh;
  font-family: KOTRAHOPE;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  width: 100%;
`;

const TitleText = styled.h1`
  margin-right: 30px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const ProfileEdit = () => {
  const [status, setStatus] = useState(1);
  const [originData, setOriginData] = useState("");

  const colorSelect = (v) => {
    return status === v ? "black" : "#bdbdbd";
  };

  const getUser = useCallback(() => {
    authApi.getuser().then((res) => setOriginData(() => res.data.data));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Container>
      <NavBar />
      <Box>
        <EditWrapper>
          <TitleDiv>
            <TitleText color={colorSelect(1)} onClick={() => setStatus(1)}>
              회원정보 수정
            </TitleText>
            <TitleText color={colorSelect(2)} onClick={() => setStatus(2)}>
              비밀번호 변경
            </TitleText>
          </TitleDiv>
          {status === 1 ? (
            <AuthEdit originData={originData} />
          ) : (
            <PasswordEdit />
          )}
        </EditWrapper>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
