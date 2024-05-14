import React, { useEffect, useState } from 'react'
import { productosOriginalesContext } from './productosOriginalesContext'
import { GetAllProducts } from '../helpers/getProducts';
export const ProductosOriginalesProvider = ({ children }) => {

    const [productosOriginales, setProductosOriginales] = useState([]);

    const traerProductos = () => {
        GetAllProducts().then((resp) => {
            setProductosOriginales(resp);
        })
    }
    useEffect(() => {
        traerProductos();
    }, [])



    return (
        <>
            <productosOriginalesContext.Provider value={{ productosOriginales, setProductosOriginales }}>
                {children}
            </productosOriginalesContext.Provider>
        </>
    )
}
