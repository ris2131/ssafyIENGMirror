import axios from "./api";

export const diaryApi = {
  // 일기 가져오기
  getdiary: (date) => axios.get(`api/diaries?date=${date}`),

  // 일기 삭제
  deletediary: (data) => axios.delete("api/diaries", data),
};

const baseURL = "https://j7d209.p.ssafy.io/";
const token = localStorage.getItem("token");
const postApi = axios.create({
  baseURL,
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: token,
  },
});

export const diaryPostApi = {
  // 일기 제출
  postdiary: (formData) => postApi.post("api/diaries", formData),
};
