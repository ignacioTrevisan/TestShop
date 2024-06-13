import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        status: 'Checking',
        uid: null,
        photoURL: null,
        displayName: '',
        email: '',
        errorMessage: '',
    },
    reducers: {
        Login: (state, action) => {
            state.status = "logged"
            state.uid = action.payload.uid;
            state.uid = action.payload.uid
            state.photoURL = action.payload.photoURL
            state.displayName = action.payload.displayName
            state.email = action.payload.email
            state.errorMessage = action.payload.errorMessage
        },
        checkingAuth: (state) => {
            state.status = "Checking"
            state.uid = null
            state.uid = null
            state.photoURL = null
            state.displayName = null
            state.email = null
            state.errorMessage = null
        },
        logout: (state, action = {}) => {
            state.status = "not-authenticated"
            state.uid = null
            state.uid = null
            state.photoURL = null
            state.displayName = null
            state.email = null
            state.errorMessage = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { Login, checkingAuth, logout } = AuthSlice.actions;