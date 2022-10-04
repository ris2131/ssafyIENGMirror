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

const baseURL = "api/";
const imageApi = axios.create({
  baseURL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

imageApi.interceptors.request.use((config) => {
  if (!config.headers.authorization) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = token;
    }
  }
  return config;
});

export const imgApi = {
  signup: (formData) => imageApi.post("members/sign-up", formData),
  googlesignup: (formData) => imageApi.post("members/google-sign-up", formData),
  putuserimage: (formData) => imageApi.put("members/info-image", formData),
  putuser: (data) => imageApi.put("members/info", data),
};
