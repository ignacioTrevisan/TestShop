import { Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Price } from './price'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {

    return (

        <>
            <Grid className='box-shadow animate__animated animate__fadeIn'
                item xs={6} sm={4} md={3} lg={2}
                sx={{
                    height: { md: 280, lg: 250, xl: 270 },
                    backgroundColor: '',
                    m: 1,
                    border: '1px primary.main',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px'
                }}>
                <Grid container sx={{ height: '20px' }}>
                    <Typography sx={{ fontSize: 10, ml: 1 }} >{producto.titulo}</Typography>
                </Grid>
                <img src={producto.imagen} width={'100%'} />
                <Price offer={producto.oferta} price={producto.precio} offerPrice={producto.precioDeOferta} />
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                    <Typography sx={{ fontSize: 15 }}>
                        Categoria:
                    </Typography>
                    <Typography sx={{ fontSize: 15, color: 'primary.main', ml: 1 }}>
                        {producto.categoria}
                    </Typography>
                </Box>
                <Grid container justifyContent={'center'} alignItems={'center'} height={'60px'}>
                    <Link to={`/item/${producto.id}`}>
                        <Button sx={{ backgroundColor: 'primary.main', color: 'white', width: '120px' }}>
                            Ver
                        </Button>
                    </Link>

                </Grid>
            </Grid >

        </ >






    )
}
