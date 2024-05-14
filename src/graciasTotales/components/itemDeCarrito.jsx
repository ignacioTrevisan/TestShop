import { RemoveShoppingCart, Visibility } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { carritoContext } from '../context/carritoContext';

export const ItemDeCarrito = ({ c }) => {
    const precio = c.oferta ? c.precioDeOferta : c.precio;
    const { carrito, dispatch } = useContext(carritoContext);

    const quitarDeCarrito = () => {
        const action = {
            type: '[CARRITO]deleteFromCarrito',
            id: c.id,
            carrito: carrito,
        }
        dispatch(action);
    }
    return (
        <>
            <Grid container className='box-shadow'>
                <Grid container mt={2} item xs={12} >
                    <Grid item lg={2} md={3} sm={3} xs={3} ml={2}>
                        <img src={c.imagen} />
                    </Grid>
                    <Grid item lg={7} md={5} sm={6} xs={7} sx={{ marginLeft: { xs: '70px', sm: '40px', lg: '40px' } }}>
                        <Typography sx={{ fontSize: { xs: '12' } }}>{c.titulo}</Typography>
                        <Typography>{c.descripcion}</Typography>
                        <Typography>$ {c.oferta ? c.precioDeOferta : c.precio}</Typography>
                        <Typography>Cantidad: {c.cantidad}</Typography>
                        <Typography>Total: ${precio}</Typography>
                    </Grid>
                    <Grid item lg={1} sm={1} ml={4} xs={12}>
                        <Link to={`/item/${c.id}`}>

                            <Grid item>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                    sx={{ width: { xs: '90%', sm: '120px' } }}
                                    startIcon={<Visibility />}
                                />
                            </Grid>
                        </Link>
                        <Grid item >
                            <Button
                                variant='contained'
                                sx={{ width: { xs: '90%', sm: '120px' }, marginTop: { sm: '40px', xs: '5px' } }}
                                color='primary'
                                startIcon={<RemoveShoppingCart />}
                                onClick={quitarDeCarrito}
                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid >
        </>
    )
}
