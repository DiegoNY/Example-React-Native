import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    main: false,
    user: false,
    config: false,
  },
  reducers: {
    changeMain: (state) => {
      state.main = !state.main;
    },
    ChangeUserMain: (state) => {
      state.user = !state.user;
    },
    changeConfig: (state) => {
      state.config = !state.config;
    },
  },
});

export const { ChangeUserMain, changeMain, changeConfig } =
  navigationSlice.actions;

export default navigationSlice.reducer;
