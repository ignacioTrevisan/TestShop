import { createSlice } from '@reduxjs/toolkit';

export const CarritoSlice = createSlice({
    name: 'Carrito',
    initialState: {
        productos: []
    },
    reducers: {
        AddProduct: (state, action) => {
            const findId = [...state.productos].findIndex((item) => item.id === action.payload.id);
            if (findId !== -1) {
                state.productos[findId].cantidad += action.payload.cantidad;
            } else {
                state.productos.push(action.payload);
            }
        },
        deleteFromCarrito: (state, action) => {
            const filterCarrito = [...state.productos].filter((item) => item.id !== action.payload);
            state.productos = filterCarrito;
        },
        deleteAllFromCarrito: (state, action) => {
            state.productos = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { AddProduct, deleteFromCarrito, deleteAllFromCarrito } = CarritoSlice.actions;