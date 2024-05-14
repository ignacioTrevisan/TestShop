import { Favorite, HeadsetSharp, HeartBroken, HeatPumpRounded, LocalOffer, LogoutOutlined, MenuOutlined, ShoppingCart, Store } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { carritoContext } from '../context/carritoContext'
import { userContext } from '../context/userContext'

export const Navbar = () => {
    const { carrito } = useContext(carritoContext);
    const { setUser, user } = useContext(userContext);
    const cerrarSesion = () => {

        setUser({
            user: '',
            logged: false,
        })
    }
    return (
        <AppBar
            position="fixed"
            sx={{
                width: '100%'
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
                    <Typography
                        variant="h6"
                        noWrap
                        component='div'
                    >Test shop</Typography>
                    <Grid item sx={{ display: { xs: 'none', sm: 'flex' } }} >
                        <Link to='/'>

                            <IconButton sx={{ color: 'icons.store', mr: 4, }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <Store sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Tienda</Typography>
                                </Box>
                            </IconButton>
                        </Link>
                        <Link to='/ofertas'>
                            <IconButton sx={{ color: 'icons.offers', mr: 4 }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <LocalOffer sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>Ultimas ofertas</Typography>
                                </Box>
                            </IconButton>
                        </Link>
                        <Link to='/carrito'>
                            <IconButton sx={{ color: 'icons.cart', mr: 4 }} >
                                <Box display='flex' flexDirection='column' alignItems='center'>
                                    <ShoppingCart sx={{ fontSize: { sm: 40 } }} />
                                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>{carrito.length > 0 ? `carrito (${carrito.length})` : `carrito`}</Typography>
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
