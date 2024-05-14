import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { carritoContext } from '../context/carritoContext'
import { ItemDeCarrito } from '../components/itemDeCarrito';

export const Carrito = () => {
    const { carrito, dispatch } = useContext(carritoContext);
    const vaciarCarrito = () => {
        const action = {
            type: '[CARRITO]deleteAllCarrito',
        }
        dispatch(action);
    }
    return (
        <>
            <Grid container className='box-shadow' height={'100vh'} sx={{ backgroundColor: '#E1E3E3' }} justifyContent={'center'}>
                <Grid item md={10} sm={12} mt={15} sx={{ backgroundColor: 'white', overflow: 'auto', height: '400px' }}>
                    {carrito.map((c) =>
                        <ItemDeCarrito c={c} key={c.id} />
                    )}
                </Grid>
                <Grid container justifyContent={'center'} mb={2}>
                    <Button sx={{ backgroundColor: 'primary.main', color: 'white', m: 1 }} onClick={vaciarCarrito}>Vaciar carrito</Button>
                    <Button sx={{ backgroundColor: 'primary.main', color: 'white', m: 1 }}>Efectuar compra</Button>
                </Grid>
            </Grid >
        </>

    )
}
