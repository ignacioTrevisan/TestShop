import { BorderAll, RemoveShoppingCart, Visibility, WidthFull } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCarrito } from '../../store/carrito/carritoSlice';

export const ItemDeCarrito = ({ c }) => {
    const precio = c.oferta ? c.precioDeOferta : c.precio;
    const [eliminandoProductoId, setEliminandoProductoId] = useState(null);

    const dispatch = useDispatch();
    const quitarDeCarrito = () => {
        setEliminandoProductoId(true);
        setTimeout(() => {
            dispatch(deleteFromCarrito(c.id))
            setEliminandoProductoId(null);
        }, 500);

    }
    return (
        <>
            <div key={c.id}

                className={`product ${eliminandoProductoId ? 'eliminando' : ''}`}
            >
                <div className="product-image">
                    <img src={c.imagen} />
                </div>
                <div className="product-desc" >
                    <div className="product-title">
                        <p>{c.titulo}</p>
                    </div>
                    <div className="product-prec">
                        <p>X{c.cantidad}=${precio * c.cantidad}</p>
                    </div>
                </div>
                <div className="icons">
                    <Link to={`/item/${c.id}`}>

                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            sx={{ marginBottom: '20px', marginTop: '10px' }}
                            startIcon={<Visibility />}
                        />

                    </Link>


                    <Button
                        variant='contained'
                        fullWidth
                        color='primary'
                        startIcon={<RemoveShoppingCart />}
                        onClick={quitarDeCarrito}
                    />

                </div>
            </div>
        </>
    )
}