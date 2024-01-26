import { createSlice } from "@reduxjs/toolkit";

export const emptyInquiry = {
  value: {
    picName: "",
    company: "",
    contact: "",
    productDetail: "",
    productConsumer: "",
    productAims: "",
    logoUrl: "",
    otherInquiry: "",
    mood: "",
    color: {
      main: "",
      sub: ""
    },
    landing: "",
    form: "",
    board: "",
    blog: "",
    auth: "",
    portfolio: "",
  },
};

const initialState = emptyInquiry;

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    applyInput: (state, action) => {
      state.value = action.payload;
    },
    resetInput: () => initialState,
  },
});

export const { applyInput, resetInput } = inputSlice.actions;
export default inputSlice.reducer;
