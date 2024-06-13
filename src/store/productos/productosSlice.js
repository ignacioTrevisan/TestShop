import { createSlice } from '@reduxjs/toolkit';

export const ProductosSlice = createSlice({
    name: 'Productos',
    initialState: {
        products: [],
        orderList: []
    },
    reducers: {
        add: (state, action) => {
            state.products = [...action.payload];
            state.orderList = [...action.payload];
        },
        orderByPrice: (state) => {
            state.orderList = [...state.orderList].sort((a, b) => a.precioDeOferta - b.precioDeOferta);
        },
        filterByOffer: (state, action) => {
            state.orderList = [...action.payload].filter(product => product.oferta === true);
        },
        dontOrder: (state, action) => {
            state.orderList = [...action.payload];
        },
        filterByClothes: (state, action) => {
            const filtro = action.payload.filtro;
            const oferta = action.payload.oferta;
            if (oferta === true) {
                if (filtro !== '') {
                    state.orderList = [...state.products].filter(product => product.oferta === true && product.categoria === filtro);
                } else {
                    state.orderList = [...state.products].filter(product => product.oferta);
                }
            } else {
                console.log("no hay oferta");
                if (filtro !== '') {
                    state.orderList = [...state.products].filter(product => product.categoria === filtro);
                } else {

                    state.orderList = [...state.products]
                }
            }
        },
    }
});



export const { add, orderByPrice, clearList, dontOrder, filterByOffer, filterByClothes } = ProductosSlice.actions;