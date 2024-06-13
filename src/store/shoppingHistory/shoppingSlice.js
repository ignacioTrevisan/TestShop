import { createSlice } from '@reduxjs/toolkit';

export const ShoppingSlice = createSlice({
    name: 'Shopping',
    initialState: {
        id: 0,
        lista: [],
        isSaving: false,
        isLoading: false,
        selected: [],
        isSelected: false,
        message: '',
    },
    reducers: {
        addHistory: (state, action) => {
            state.lista = action.payload;
            state.isLoading = false;
            state.isSelected = false;
            state.message = '';
            state.selected = [];
        },
        startSaving: (state) => {
            state.isSaving = true;
            state.isSelected = false;
            state.message = '';
            state.selected = [];
        },
        buySaved: (state) => {
            state.isSaving = false;
            state.isSelected = false;
            state.message = 'Compra efectuada correctamente';
            state.selected = [];
        },
        deleteMessage: (state) => {
            state.message = '';
            state.isSelected = false;
            state.selected = [];
        },
        startLoading: (state) => {
            state.message = '';
            state.isSelected = false;
            state.isLoading = true;
            state.selected = [];
        },
        isSelected: (state, action) => {
            state.isSelected = true;
            state.selected = action.payload;
        }
    }
});


export const { addHistory, startSaving, buySaved, startLoading, deleteMessage, isSelected } = ShoppingSlice.actions;