import axios from "./api";
export const authApi = {
  // 이메일 중복 체크
  checkemail: (email) => axios.post("api/members/email/check", email),
  // 인증번호 보내기
  sendemail: (email) => axios.post("api/members/email/send", email),
  // 인증번호 검증
  confirmemail: (data) => axios.post("api/members/email/confirm", data),

  signup: (data) => axios.post("api/members/sign-up", data),
  login: (data) => axios.post("api/login", data),
  googlelogin: (data) => axios.post("api/google-login", data),
  googlesignup: (data) => axios.post("api/members/google-sign-up", data),
  getuser: () => axios.get("api/members"),
  putuser: (data) => axios.put("api/members/info", data),
  putpassword: (pwd) => axios.put("api/members/password", pwd),
  deleteuser: () => axios.delete("api/members"),
  test: (data) => axios.post("api/diaries", data),
};
