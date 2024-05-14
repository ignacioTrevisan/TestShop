import React, { useReducer } from 'react'
import { carritoContext } from './carritoContext'
import { CarritoReducer } from '../reducer/carritoReducer';
export const CarritoProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(CarritoReducer, []);
    return (
        <carritoContext.Provider value={{ carrito, dispatch }}>
            {children}
        </carritoContext.Provider>
    )
}
