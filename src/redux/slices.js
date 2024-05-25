import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        role: null,
        sub: null,    
        userId: null,
        processorId: null,
        iat: null,
        exp: null,
        userInfo: []
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.sub = action.payload.sub;    
            state.userId = action.payload.userId;
            state.processorId = action.payload.processorId;
            state.iat = action.payload.iat;
            state.exp = action.payload.exp;
            state.userInfo = action.payload.userInfo;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = null;
            state.sub = null;
            state.userId = null;
            state.processorId = null;
            state.iat = null;
            state.exp = null;
            state.userInfo = [];
        },
    },
});

export const languageSlice = createSlice({
    name: 'language',
    initialState: { value: 'es' },
    reducers: {
      setLanguage: (state, action) => {
        state.value = action.payload;
      },
    },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.value;

export const { loginSuccess, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;