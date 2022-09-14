import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  word: 1,
  sentence: 1,
  quiz: 0,
};

const eduSlice = createSlice({
  name: "edu",
  initialState,
  reducers: {
    goNext(state, title) {
      title.payload === "word" ? (state.word += 1) : (state.sentence += 1);
    },
    goPrev(state, title) {
      title.payload === "word" ? (state.word -= 1) : (state.sentence -= 1);
    },
    successQuiz(state) {
      state.quiz += 1;
    },
  },
});

export const eduActions = eduSlice.actions;
export default eduSlice.reducer;
