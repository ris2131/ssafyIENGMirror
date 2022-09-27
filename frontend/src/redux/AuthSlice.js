import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../shared/authApi";
import { setRefreshToken } from "../shared/Cookie";

const initialState = {
  isLoggedIn: false,
  googleLogin: true,
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

export const login = createAsyncThunk(
  "AuthSlice/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authApi.login(data);
      localStorage.setItem("token", res.headers.authorization);
      setRefreshToken(res.headers.refreshtoken);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const googleLogin = createAsyncThunk(
  "AuthSlice/googleLogin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authApi.googlelogin(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state) => {
      state.isLoggedIn = true;
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.googleLogin = action.data;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
