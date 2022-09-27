import axios from "./api";
export const authApi = {
  signup: (data) => axios.post("api/members/sign-up", data),
  login: (data) => axios.post("api/login", data),
  googlelogin: (data) => axios.post("api/google-login", data),
  googlesignup: (data) => axios.post("api/members/google-sign-up", data),
  getuser: () => axios.get("api/members"),
  putuser: (data) => axios.put("api/members/info", data),
  putpassword: (pwd) => axios.put("api/members/password", pwd),
  deleteuser: () => axios.delete("api/members"),
  emailauth: (email) => axios.post("api/members/email", email),
  test: (data) => axios.post("api/diaries", data),
};
