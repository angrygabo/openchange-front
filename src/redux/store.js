import { configureStore } from "@reduxjs/toolkit";
import { authSlice, languageSlice } from "./slices";

export default configureStore ({
    reducer: {
        auth: authSlice.reducer,
        language: languageSlice.reducer
    }
})