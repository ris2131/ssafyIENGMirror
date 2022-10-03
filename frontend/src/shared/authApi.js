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
  getuser: () => axios.get("api/members"),
  putpassword: (pwd) => axios.put("api/members/password", pwd),
  deleteuser: () => axios.delete("api/members"),

  getMyhistory: (date) => axios.get("api/histories", { params: { date } }),
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
  googlesignup: (formData) => imageApi.post("members/google-sign-up", formData),
  putuser: (formData) => imageApi.put("members/info", formData),
};
