import { createSlice } from "@reduxjs/toolkit";

export const emptyInquiry = {
  value: {
    picName: "",
    productName: "",
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
    applyColor: (state, action) => {
      state.value.color = action.payload;
    },
    resetInput: () => initialState,
  },
});

export const { applyInput, applyColor, resetInput } = inputSlice.actions;
export default inputSlice.reducer;
