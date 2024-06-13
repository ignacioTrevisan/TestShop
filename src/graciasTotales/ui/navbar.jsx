import { Favorite, HeadsetSharp, HeartBroken, HeatPumpRounded, History, LocalOffer, LogoutOutlined, MenuOutlined, Schedule, ShoppingBasket, ShoppingCart, Store } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../navbar.css'

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
    const [MenuDesplegado, setMenuDesplegado] = useState(false)

    useEffect(() => {
        if (Efecto === false) {
            setEfecto(true)
            setTimeout(() => {
                setEfecto(false)
            }, 500);
        }
    }, [productos])



    return (
        <>
            <div className={`appBar ${MenuDesplegado ? 'Flexed' : ''}`}>
                <div className="menu-button">
                    <div className="menu-containerIcon">
                        <IconButton onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                            <MenuOutlined />
                        </IconButton>
                    </div>
                    <h3>{displayName}</h3>
                </div>
                <div className={`icons_container ${MenuDesplegado ? 'visible' : ''}`}>
                    <Link to='/' onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                        <IconButton sx={{ width: { sm: '70px', md: '120px' } }}>
                            <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                                <div className="icon">
                                    <Store sx={{ fontSize: { sm: 20 } }} />
                                </div>
                                <div className="texto">
                                    <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex' }, fontSize: '12px' }}>Tienda</Typography>
                                </div>
                            </div>
                        </IconButton>
                    </Link>
                    <Link to='/ofertas' onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                        <IconButton sx={{ width: { sm: '70px', md: '120px' } }}>
                            <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                                <LocalOffer sx={{ fontSize: { sm: 20 } }} />
                                <div className="texto">
                                    <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex', fontSize: '12px' } }}>Ultimas oferta</Typography>
                                </div>
                            </div>
                        </IconButton>
                    </Link>
                    <Link to='/carrito' onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                        <IconButton sx={{ width: { sm: '70px', md: '120px' } }}>
                            <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                                <ShoppingCart sx={{ fontSize: { sm: 20 } }} />
                                <div className="texto">
                                    <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex', fontSize: '12px' } }}>
                                        {productos.length > 0 ? `carrito (${productos.length})` : `carrito`}
                                    </Typography>
                                </div>
                            </div>
                        </IconButton>
                    </Link>
                    <Link to='/historial' onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                        <IconButton sx={{ width: { sm: '70px', md: '120px' } }}>
                            <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                                <Schedule sx={{ fontSize: { sm: 20 } }} />
                                <div className="texto">
                                    <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex', fontSize: '12px' } }}>Mis compra</Typography>
                                </div>
                            </div>
                        </IconButton>
                    </Link>
                    <Link to='/about' onClick={() => setMenuDesplegado(!MenuDesplegado)}>
                        <IconButton sx={{ width: { sm: '70px', md: '120px' } }}>
                            <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                                <Favorite sx={{ fontSize: { sm: 20 } }} />
                                <div className="texto">
                                    <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex', fontSize: '12px' } }}>Sobre nosotros</Typography>
                                </div>
                            </div>
                        </IconButton>
                    </Link>
                    <IconButton sx={{ width: { sm: '70px', md: '120px' } }} onClick={cerrarSesion}>
                        <div className={`textAndIcons ${MenuDesplegado ? 'iconsRight' : ''}`}>
                            <LogoutOutlined sx={{ fontSize: { sm: 20 } }} />
                            <div className="texto">
                                <Typography sx={{ display: { xs: MenuDesplegado ? 'flex' : 'none', sm: 'none', md: 'flex', fontSize: '12px' } }}>Cerrar sesión</Typography>
                            </div>
                        </div>
                    </IconButton>
                </div>
            </div>
        </>
    );
}
