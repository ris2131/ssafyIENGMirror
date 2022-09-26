import axios from "./api";
export const authApi = {
  signup: (data) => axios.post("api/members/sign-up", data),
  login: (data) => axios.post("api/login", data),
};
