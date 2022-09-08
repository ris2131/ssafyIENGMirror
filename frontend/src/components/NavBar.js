import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 40px;
`;

const logoImage = process.env.PUBLIC_URL + `/assets/logo.png`;

const StyledImage = styled.img`
  width: 100px;
  height: 80px;
  cursor: pointer;
`;

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavDiv>
      <div>
        <StyledImage src={logoImage} alt="#" onClick={() => navigate("/")} />
      </div>
      <div></div>
    </NavDiv>
  );
};

export default NavBar;
