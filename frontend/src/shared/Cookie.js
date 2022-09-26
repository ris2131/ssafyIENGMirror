import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
    httpOnly: true,
    secure: true,
  });
};

export const getRefreshToken = () => {
  return cookies.get("refresh_token");
};

export const removeRefreshToken = () => {
  return cookies.remove("refresh_token");
};
