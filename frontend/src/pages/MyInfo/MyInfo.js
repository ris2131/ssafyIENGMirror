import MyCalendar from "./components/MyCalendar";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Profile from "./components/Profile";

const Wrap = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const MyInfo = () => {
  return (
    <Wrap>
      <NavBar />
      <Container>
        <Profile />
        <MyCalendar />
      </Container>
    </Wrap>
  );
};

export default MyInfo;
