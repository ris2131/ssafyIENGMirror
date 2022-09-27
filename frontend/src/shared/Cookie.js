import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  console.log(refreshToken);
  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getRefreshToken = () => {
  return cookies.get("refresh_token");
};

export const removeRefreshToken = () => {
  console.log(cookies.get("refresh_token"));
  return cookies.remove("refresh_token");
};
