import React, { useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ItemList } from '../components/itemList'
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearList, dontOrder, filterByClothes, filterByOffer, orderByPrice } from '../../store/productos/productosSlice';

export const PaginaPrincipal = () => {
    const dispatch = useDispatch();
    const params = useLocation();
    const [filtro, setFiltro] = useState();
    const { products, orderList } = useSelector(state => state.productosSlice);
    useEffect(() => {
        if (params.pathname === '/ofertas' && products.length > 0) {
            dispatch(filterByOffer(products));
        } else {
            dispatch(dontOrder(products));
        }
    }, [params, products]);

    const ordenar = () => {
        dispatch(orderByPrice())
    }






    const cambiarFiltro = (filtro) => {

        setFiltro(filtro);

        if (orderList.length > 0) {
            if (filtro !== 'Todo') {
                if (params.pathname === '/ofertas') {
                    console.log(orderList);
                    dispatch(filterByClothes({ filtro, oferta: true }));
                } else {
                    dispatch(filterByClothes({ filtro, oferta: false }));
                }
            } else {
                if (params.pathname === '/ofertas') {
                    dispatch(filterByClothes({ filtro: '', oferta: true }));
                } else {
                    dispatch(filterByClothes({ filtro: '', oferta: false }));
                }
            }
        }
    }
    return (
        <>
            <Grid container justifyContent={'center'} sx={{ mt: 1, backgroundColor: '#E1E3E3' }}>
                <ItemList productos={orderList}
                    ordenar={ordenar}
                    cambiarFiltro={cambiarFiltro}
                    filtro={filtro}
                ></ItemList>
            </Grid >
        </>
    )
}
