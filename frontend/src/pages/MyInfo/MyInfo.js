import MyCalendar from "./components/MyCalendar";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Profile from "./components/Profile";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 100vw;
`;

const MyInfo = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  });
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
