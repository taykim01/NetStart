import { createSlice } from "@reduxjs/toolkit";

export const emptyInquiry = {
  value: ""
};

const initialState = emptyInquiry;

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    applyFile: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { applyFile } = fileSlice.actions;
export default fileSlice.reducer;
