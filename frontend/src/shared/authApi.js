import axios from "./api";
export const authApi = {
  // 이메일 중복 체크
  checkemail: (email) => axios.post("api/members/email/check", email),
  // 인증번호 보내기
  sendemail: (email) => axios.post("api/members/email/send", email),
  // 인증번호 검증
  confirmemail: (data) => axios.post("api/members/email/confirm", data),

  login: (data) => axios.post("api/login", data),
  googlelogin: (data) => axios.post("api/google-login", data),
  googlesignup: (data) => axios.post("api/members/google-sign-up", data),
  getuser: () => axios.get("api/members"),
  putuser: (data) => axios.put("api/members/info", data),
  putpassword: (pwd) => axios.put("api/members/password", pwd),
  deleteuser: () => axios.delete("api/members"),
};

const baseURL = "http://localhost:3000/api";
const imageApi = axios.create({
  baseURL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

export const imgApi = {
  signup: (formData) => imageApi.post("members/sign-up", formData),
};
