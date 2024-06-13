import { configureStore } from "@reduxjs/toolkit";
import { ProductosSlice, ShoppingSlice, CarritoSlice, AuthSlice } from "./";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice.reducer,
        carritoSlice: CarritoSlice.reducer,
        productosSlice: ProductosSlice.reducer,
        shoppingSlice: ShoppingSlice.reducer,
    }
})