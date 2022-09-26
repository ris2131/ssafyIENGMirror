import baseaxios from "axios";

const baseURL = "https://j7d209.p.ssafy.io/api/";

const axios = baseaxios.create({
  baseURL,
  headers: {
    "content-type": "application/json;charse=UTF-8",
    accept: "application/json",
  },
});

axios.interceptors.request.use((config) => {
  if (!config.headers.authorization) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.authorizaion = token;
    }
  }
  return config;
});

export default axios;
