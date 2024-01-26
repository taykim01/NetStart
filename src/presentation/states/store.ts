import fileReducer from './features/fileSlice';
import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./features/inputSlice";
import responsiveReducer from "./features/responsiveSlice";

export default configureStore({
  reducer: {
    input: inputReducer,
    file: fileReducer,
    responsive: responsiveReducer,
  },
});
