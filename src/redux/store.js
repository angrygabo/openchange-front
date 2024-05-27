import { configureStore } from "@reduxjs/toolkit";
import { authSlice, languageSlice, operationsSlice } from "./slices";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    language: languageSlice.reducer,
    operations: operationsSlice.reducer,
  },
});