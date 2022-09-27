import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { removeRefreshToken } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/AuthSlice";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 40px;
`;

const logoImage = process.env.PUBLIC_URL + `/assets/logo.png`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;
const HamBar = styled.div`
  cursor: pointer;
  padding: 10px;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    removeRefreshToken();
    dispatch(authActions.logout());
  };

  return (
    <NavDiv>
      <div>
        <StyledImage src={logoImage} alt="#" onClick={() => navigate("/")} />
      </div>
      <HamBar>
        <Avatar onClick={handleClick}>H</Avatar>
      </HamBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => navigate("/profileedit")}>
          회원정보 수정
        </MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </Menu>
    </NavDiv>
  );
};

export default NavBar;
