import { BorderAll, RemoveShoppingCart, Visibility } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCarrito } from '../../store/carrito/carritoSlice';

export const Historyitem = ({ l }) => {
    const precio = l.oferta ? l.precioDeOferta : l.precio;

    return (
        <>
            <Grid container className='box-shadow' mt={2} ml={2} width={'95%'} sx={{ backgroundColor: '#E1E3E3', borderRadius: '10px', height: { sm: '120px', xs: '550px' } }}>
                <Grid container xs={12} alignItems={'center'}>
                    <Grid item mt={1} lg={2} md={3} sm={3} xs={12} ml={1} justifyContent={'center'} >
                        <img src={l.imagen} width={'100%'} />
                    </Grid>
                    <Grid item lg={7} md={6} sm={5} xs={12} overflow={'hidden'} sx={{ marginLeft: { xs: '70px', sm: '40px', lg: '40px' } }}>
                        <Typography sx={{ fontSize: { xs: '12' } }}>{l.titulo}</Typography>
                        <Typography>{l.descripcion}</Typography>
                        <Typography>$ {l.oferta ? l.precioDeOferta : l.precio}</Typography>
                        <Typography>Cantidad: {l.cantidad}</Typography>
                        <Typography>Total: ${precio * l.cantidad}</Typography>
                    </Grid>
                    <Grid item lg={1} sm={1} ml={4} xs={12} alignItems={'center'}>
                        <Link to={`/item/${l.id}`}>

                            <Grid item>
                                <Button

                                    color='primary'
                                    fullWidth
                                    sx={{ width: { xs: '90%', sm: '30px', md: '100px' } }}
                                    startIcon={<Visibility />}
                                />
                            </Grid>
                        </Link>

                    </Grid>
                </Grid>

            </Grid >

        </>

    )
}
