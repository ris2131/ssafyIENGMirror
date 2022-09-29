import axios from "./api";

export const diaryApi = {
  // 일기 가져오기
  getdiary: (date) => axios.get(`api/diaries?date=${date}`),

  // 일기 제출
  postdiary: (data) => axios.post("api/diaries", data),

  // 일기 삭제
  deletediary: (data) => axios.delete("api/diaries", data),

  // 사진분석 - 키워드 추출
  postkeyword: (data) => axios.post("ai-api/diaries/keywords", data),
};
