import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { ItemDeCarrito } from '../components/itemDeCarrito';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromCarrito } from '../../store/carrito/carritoSlice';
import { deleteMessage, startSavingHistory, empezarACargarHistorial } from '../../store';
// import { } from '../../store/shoppingHistory/thunks'
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


export const Carrito = () => {
    const dispatch = useDispatch();
    const vaciarCarrito = () => {
        dispatch(deleteAllFromCarrito())
    }
    const { productos } = useSelector(state => state.carritoSlice);
    const { isSaving, message } = useSelector(state => state.shoppingSlice);
    useEffect(() => {
        if (isSaving === false && message === 'Compra efectuada correctamente') {

            Swal.fire({
                title: 'Compra efectuada',
                text: message,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            dispatch(deleteAllFromCarrito());
            dispatch(deleteMessage())
        }
    }, [isSaving])
    const navigate = useNavigate();
    useEffect(() => {
        if (productos.length === 0) {

            Swal.fire({
                title: 'Carrito vacio',
                text: 'Aun no hay nada en el carrito :(',
                icon: 'info',
                confirmButtonText: 'Ok',
            }).then(() => {
                navigate('/')
            })
        }
    }, [productos])
    Swal.getConfirmButton(() => { console.log("a") })




    const efectuarCompra = () => {
        dispatch(startSavingHistory(productos))
        dispatch(empezarACargarHistorial());
    }

    return (
        <>
            <Grid container className='box-shadow' height={'100vh'} sx={{ backgroundColor: '#E1E3E3' }} justifyContent={'center'}>
                <Grid item md={10} sm={12} mt={15} sx={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '400px' }}>
                    {productos.map((c) =>
                        <ItemDeCarrito c={c} key={c.id} />
                    )}
                </Grid>
                <Grid container justifyContent={'center'} mb={2}>
                    <Button sx={{ backgroundColor: 'primary.main', color: 'white', m: 1 }} onClick={vaciarCarrito}>Vaciar carrito</Button>
                    <Button sx={{ backgroundColor: 'primary.main', color: 'white', m: 1 }} onClick={efectuarCompra}>Efectuar compra</Button>
                </Grid>
            </Grid >
        </>

    )
}
