import axios from "./api";
export const authApi = {
  signup: (data) => axios.post("api/members/sign-up", data),
  login: (data) => axios.post("api/login", data),
  // googlelogin: (data) => axios.post()
  getuser: () => axios.get("api/members"),
  putuser: (data) => axios.put("api/members", data),
  putpassword: (pwd) => axios.put("api/members/password", pwd),
  deleteuser: () => axios.delete("api/members"),
};
