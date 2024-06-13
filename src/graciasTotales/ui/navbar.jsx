import { Favorite, HeadsetSharp, HeartBroken, HeatPumpRounded, History, LocalOffer, LogoutOutlined, MenuOutlined, Schedule, ShoppingBasket, ShoppingCart, Store } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { LogoutFireBase } from '../../store/'


export const Navbar = () => {
    const { displayName } = useSelector(state => state.authSlice);
    const { productos } = useSelector(state => state.carritoSlice);
    const dispatch = useDispatch();
    const cerrarSesion = () => {
        dispatch(LogoutFireBase());
    }
    const [Efecto, setEfecto] = useState(false)

    useEffect(() => {
        if (Efecto === false) {
            setEfecto(true)
            setTimeout(() => {
                setEfecto(false)
            }, 500);
        }
    }, [productos])

    return (
        <AppBar
            position="fixed"
            sx={{
                width: '100%',
                height: '90px'
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Grid item xs={2}>

                        <Typography
                            variant="h6"
                            noWrap
                            component='div'
                        >{displayName} </Typography>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'flex' } }} xs={10} justifyContent={'end'}>
                        <Link to='/'>

                            <IconButton sx={{ color: 'icons.store', mr: 4, }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <Store sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Tienda</Typography>
                                </Box>
                            </IconButton>
                        </Link>
                        <Link to='/ofertas'>
                            <IconButton sx={{ color: 'icons.offers', mr: 4 }}  >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <LocalOffer sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Ultimas ofertas</Typography>
                                </Box>
                            </IconButton>
                        </Link>

                        <Link to='/carrito'>
                            <IconButton sx={{ color: 'icons.cart', mr: 4 }} >
                                <div className={`shoppingCart ${Efecto ? 'pulse' : ''}`}>


                                    <ShoppingCart sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>{productos.length > 0 ? `carrito (${productos.length})` : `carrito`}</Typography>

                                </div>
                            </IconButton>

                        </Link>
                        <Link to='/historial'>
                            <IconButton sx={{ color: 'icons.history', mr: 4 }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <Schedule sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Mis compras</Typography>
                                </Box>
                            </IconButton>
                        </Link>
                        <Link to='/about'>
                            <IconButton sx={{ color: 'icons.about', mr: 4 }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <Favorite sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Sobre nosotros</Typography>
                                </Box>
                            </IconButton>

                        </Link>
                        <div onClick={cerrarSesion}>
                            <Link to='/auth/login'>
                                <IconButton sx={{ color: 'icons.logout', mr: 4 }} >
                                    <Box display='flex' flexDirection='column' alignItems='center'>
                                        <LogoutOutlined sx={{ fontSize: { sm: 40 } }} />
                                        <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} >Cerrar sesión</Typography>
                                    </Box>
                                </IconButton>
                            </Link>
                        </div>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}
