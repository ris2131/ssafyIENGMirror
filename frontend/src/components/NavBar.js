import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  font-size: 40px;
`;

const NavBar = () => {
  return (
    <NavDiv>
      <div>
        <AiOutlineHome />
      </div>
      <div>
        <GiHamburgerMenu />
      </div>
    </NavDiv>
  );
};

export default NavBar;
