import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../shared/authApi";

const initialState = {
  isLoggedIn: false,
};

export const signup = createAsyncThunk(
  "AuthSlice/signup",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authApi.signup(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
