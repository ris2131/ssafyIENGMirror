import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { eduApi } from "../shared/eduApi";

const initialState = {
  word: 1,
  sentence: 1,
  quiz: 0,
  current: {
    word: 1,
    sentence: 1,
  },
};

export const getdata = createAsyncThunk(
  "EduSlice/getword",
  async (type, { rejectWithValue }) => {
    try {
      // const res = await eduApi.getdata(type);
      const res = await eduApi.getdata(type);
      return res.data;
    } catch (err) {
      rejectWithValue(err.response);
    }
  }
);

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
