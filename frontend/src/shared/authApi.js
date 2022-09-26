import axios from "./api";
export const authApi = {
  signup: (data) => axios.post("members/sign-up", data),
};
