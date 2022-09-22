import styled from "styled-components";
import NavBar from "../../components/NavBar";
// import Login from "../Auth/Login";
import Mode from "./components/Mode";
import { backgroundImg } from "./../../assets/BackgroundImg";

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

const modeList = [
  {
    title: "단어",
    description:
      "3개의 단어 카드를 스피커 버튼으로 들은 후 말하기 버튼을 눌러 직접 발음하여 학습해보아요.",
  },
  {
    title: "문장",
    description:
      "3개의 문장 카드를 스피커 버튼으로 들은 후 말하기 버튼을 눌러 직접 발음하여 학습해보아요",
  },
  {
    title: "영어일기",
    description:
      "오늘 있었던 일을 한 장의 사진으로 남기고 사진과 관련된 간단한 단어를 추천받아 일기를 작성해 보아요.",
  },
];

const Home = () => {
  // if(!isLoggedIn){
  //   return <Login />
  // }

  //

  return (
    <Container>
      <NavBar />
      <TitleDiv>
        <p>어떤 학습을 해볼까요?</p>
      </TitleDiv>
      <ModeWrapper>
        {modeList.map((it, idx) => (
          <Mode key={idx} title={it.title} description={it.description} />
        ))}
      </ModeWrapper>
    </Container>
  );
};

export default Home;
