import { Button, ButtonBase, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'

import { useDispatch } from 'react-redux';
import { AddProduct } from '../../store/carrito/carritoSlice';




export const ItemViewContainer = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const masCantidad = () => {
        setCantidad(cantidad + 1);
    }
    const menosCantidad = () => {
        setCantidad(cantidad - 1);
    }
    const dispatch = useDispatch();
    const generarCompra = () => {
        const productoComprado = { ...producto, cantidad };
        dispatch(AddProduct(productoComprado));
    }

    return (
        <>
            <Grid container className='animate__animated animated_fadeInbox-shadow animate__animated animate__fadeIn' height={'100vh'} sx={{ backgroundColor: '#E1E3E3' }} justifyContent={'center'}>
                <Grid item xs={8} height={'400px'} mt={15} sx={{ backgroundColor: 'white' }}>
                    <Grid item xs={12} height={'50px'} width={'100%'} justifyContent={'center'} >
                        <Typography variant='h5'>{producto.titulo}</Typography>
                    </Grid>
                    <Grid container height={'350px'} >

                        <Grid item xs={5} >
                            <Grid item xs={10} m={3} height='200px'>
                                <img src={producto.imagen} width={'100%'} height={'100%'} />
                            </Grid>
                            <Grid item xs={10}>

                                <Grid container m={3} height={'70px'}>
                                    <Grid item xs={4} >
                                        <img src={producto.imagen} width={'95%'} height={'100%'} />
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img src={producto.imagen} width={'95%'} height={'100%'} />
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img src={producto.imagen} width={'100%'} height={'100%'} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7} >
                            <Grid container mt={3}>
                                <Grid item xs={12}>
                                    <Typography><b>Categoria: </b>{producto.categoria}</Typography>
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Typography><b>Descripcion: </b>{producto.descripcion}</Typography>
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    {producto.oferta ?
                                        <Grid container width={'200px'}>
                                            <Typography><b>Precio:</b></Typography><Typography ml={1} > $ {producto.precioDeOferta}</Typography><Typography sx={{ textDecoration: 'line-through', color: 'red' }} ml={1}>${producto.precio}</Typography>
                                        </Grid>

                                        : <Typography><b>Precio:</b> ${producto.precio}</Typography>}
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Typography><b>Stock: </b>{producto.stock}</Typography>
                                </Grid>
                                <Grid item xs={12} mt={0} height={'200'}>
                                    <Grid item xs={3} mt={2}>
                                        <Typography><b>Cantidad: </b>{cantidad}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={2} >
                                                <Button sx={{ backgroundColor: 'primary.main', color: 'white' }} onClick={menosCantidad}>-</Button>
                                            </Grid>
                                            <Grid item xs={2} ml={5}>
                                                <Button sx={{ backgroundColor: 'primary.main', color: 'white' }} onClick={masCantidad}>+</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} mt={3} justifyContent={'center'} width={'100%'}>

                                    <Button onClick={generarCompra} sx={{ backgroundColor: 'primary.main', color: 'white' }}>Agregar al carrito</Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}
