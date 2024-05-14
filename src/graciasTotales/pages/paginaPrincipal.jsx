import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ItemList } from '../components/itemList'
import { Grid } from '@mui/material';
import { productsReducer } from '../reducer/productsReducer';
import { productosOriginalesContext } from '../context/productosOriginalesContext';

export const PaginaPrincipal = () => {
    const { productosOriginales } = useContext(productosOriginalesContext);
    const [state, dispatch] = useReducer(productsReducer, []);
    const [filtro, setFiltro] = useState('');
    const params = useLocation();



    //ACCIONES PARA EL DISPATCH:

    //SE TRAE TODOS LOS PRODUCTOS DEL .JSON
    const traerProductos = () => {

        const action = {
            type: '[PRODUCTS]cargaInicial',
            payload: productosOriginales,
        }
        dispatch(action);

    }

    useEffect(() => {
        traerProductos
    }, [productosOriginales])

    //FUNCION PARA TRAER TODAS LAS OFERTAS DEL "productosOriginales"
    const traerOfertas = () => {
        const action = {
            type: '[PRODUCTS]FilterByOffers',
            payload: productosOriginales,
        }
        dispatch(action);
    }


    //SE TRAEN TODOS LOS PRODUCTOS SEGUN FILTROS

    const traerConFiltro = () => {
        //PRIMERO SE MIRA SI FILTRAR POR ALGUN TIPO DE ROPA O TODA LA ROPA EN GENERAL:
        if (filtro === 'Todo' || filtro === 'Seleccione' || filtro === '') {
            //SI SE FILTRA POR TODO TIPO DE ROPA MIRAMOS SI FILTRAMOS SOLO LAS QUE TIENEN CON OFERTAS O NO:
            if (productosCargados && params.pathname === '/') {
                traerProductos();
                //ACA SE BUSCA TODA LA ROPA Y SIN OFERTA
            } else if (productosCargados && params.pathname === '/ofertas') {
                traerOfertas();
                //ACA SE BUSCA TODA LA ROPA Y CON OFERTA
            }
        } else {
            //SI SE FILTRA POR ROPA MIRAMOS SI ADEMAS HAY QUE FILTRAR DESDE TODA LA ROPA O DESDE LA ROPA EN OFERTA
            let tip = '';
            if (params.pathname === "/") {
                tip = '[PRODUCTS]filterByClothing';
                //ACA SE BUSCA SEGUN TIPO DE ROPA Y SIN OFERTA
            } else {
                tip = '[PRODUCTS]filterByClothingAndWithOffers';
                //ACA SE BUSCA SEGUN TIPO DE ROPA Y CON OFERTA
            }
            const action = {
                type: tip,
                payload: productosOriginales,
                clothingType: filtro,
            }
            //DESPACHAMOS
            dispatch(action);
        }


    }
    const [productosCargados, setProductosCargados] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            await traerProductos();
            setProductosCargados(true);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setFiltro('Todo');
        if (productosCargados && params.pathname === '/') {
            traerProductos();

        } else if (productosCargados && params.pathname === '/ofertas') {
            traerOfertas();
        }
    }, [params, productosCargados])


    useEffect(() => {
        traerConFiltro();
    }, [filtro])
    const ordenar = () => {
        console.log("ordenar");
        const action = {
            type: '[PRODUCTS]orderByPrice',
            payload: state,
        }

        dispatch(action);
    }

    return (
        <>
            <Grid container justifyContent={'center'} sx={{ mt: 1, backgroundColor: '#E1E3E3' }}>
                <ItemList productos={state} setFiltro={setFiltro} filtro={filtro} ordenar={ordenar}></ItemList>
            </Grid>
        </>
    )
}
