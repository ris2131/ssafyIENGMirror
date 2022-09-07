import styled from "styled-components";

// const image = process.env.PUBLIC_URL + `/assets/1.png`;

const LoginDiv = styled.div`
  display: flex;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

const Login = () => {
  return (
    <LoginDiv>
      <LeftDiv>L</LeftDiv>
      <RightDiv>R</RightDiv>
    </LoginDiv>
  );
};

export default Login;
