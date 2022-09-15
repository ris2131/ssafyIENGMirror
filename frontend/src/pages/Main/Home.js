import styled from "styled-components";
import NavBar from "../../components/NavBar";
// import Login from "../Auth/Login";
import Mode from "./components/Mode";

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modeList = [
  {
    title: "단어",
    description:
      "3개의 단어 카드를 스피커 버튼으로 들은 후 말하기 버튼을 눌러 직접 발음하여 학습하는 모드입니다.",
  },
  {
    title: "문장",
    description:
      "3개의 문장 카드를 스피커 버튼으로 들은 후 말하기 버튼을 눌러 직접 발음하여 학습하는 모드입니다.",
  },
  {
    title: "영어일기",
    description: "오늘의 영어일기를 작성해보는 ㅇㅅㅇ",
  },
];

const Home = () => {
  // if(!isLoggedIn){
  //   return <Login />
  // }
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
