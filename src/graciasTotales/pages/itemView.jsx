import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productosOriginalesContext } from '../context/productosOriginalesContext';
import { productsReducer } from '../reducer/productsReducer';
import { ItemViewContainer } from './itemViewContainer';

export const ItemView = () => {
    const { productosOriginales } = useContext(productosOriginalesContext);
    const [state, dispatch] = useReducer(productsReducer, []);
    const [carga, setCarga] = useState(false);
    const id = useParams();
    useEffect(() => {
        if (productosOriginales.length > 0) {
            const action = {
                type: '[PRODUCTS]filterById',
                payload: productosOriginales,
                id: id.id,
            }
            dispatch(action);
            setCarga(true);
        }
    }, [productosOriginales])

    return (
        <>
            {carga && <ItemViewContainer producto={state[0]} />}
        </>
    )
}
