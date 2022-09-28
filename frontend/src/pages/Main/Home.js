import styled from "styled-components";
import NavBar from "../../components/NavBar";
// import Login from "../Auth/Login";
import Mode from "./components/Mode";
import { backgroundImg } from "./../../assets/BackgroundImg";
import { modeList } from "./ModeList";

import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

const Container = styled.div`
  @media screen and (min-width: 821px) {
    height: 100vh;
  }

  background-image: url(${backgroundImg});
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ModeWrapper = styled.div`
  @media screen and (max-width: 821px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const navigate = useNavigate();

  const reload = useCallback(() => {
    const token = localStorage.getItem("token");
    // 원래는 유효성검사해야함
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    reload();
    console.log("hi");
  }, [reload]);

  return (
    <Container>
      <NavBar />
      <TitleDiv>
        <p>어떤 학습을 해볼까요?</p>
      </TitleDiv>
      <ModeWrapper>
        {modeList.map((it, idx) => (
          <Mode
            key={idx}
            title={it.title}
            description={it.description}
            image={it.image}
            back={it.back}
          />
        ))}
      </ModeWrapper>
    </Container>
  );
};

export default Home;
