import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromCarrito, deleteMessage, empezarACargarHistorial, startSavingHistory } from '../../store';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../../carrito.css'
import { Button, Grid, Typography } from '@mui/material';
import { ItemDeCarrito } from '../components/itemDeCarrito';

export const CarritoView = () => {
    const dispatch = useDispatch();
    const vaciarCarrito = () => {
        dispatch(deleteAllFromCarrito())
    }
    const { productos } = useSelector(state => state.carritoSlice);
    const { isSaving, message } = useSelector(state => state.shoppingSlice);
    const [Compra, setCompra] = useState(false)
    useEffect(() => {
        if (isSaving === false && message === 'Compra efectuada correctamente' && Compra) {
            Swal.fire({
                title: 'Compra efectuada',
                text: message,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                navigate('/historial')
            })

            dispatch(deleteAllFromCarrito());
            dispatch(deleteMessage())
        }
    }, [isSaving])
    const navigate = useNavigate();
    useEffect(() => {
        if (productos.length === 0 && Compra === false) {

            Swal.fire({
                title: 'Carrito vacio',
                text: 'Aun no hay nada en el carrito :(',
                icon: 'info',
                confirmButtonText: 'Ok',
            }).then(() => {
                navigate('/')
            })
        } else {
            setCompra(false);
        }
    }, [productos])

    const efectuarCompra = () => {
        setCompra(true);
        dispatch(startSavingHistory(productos))
        dispatch(empezarACargarHistorial());
    }

    const cantidadTotal = useMemo(() => {
        let contador = 0;
        {
            productos.map((c) =>
                contador += c.cantidad
            )
        }
        return contador
    }, [productos])
    console.log(cantidadTotal);


    const valorTotal = useMemo(() => {
        let contador = 0;
        {
            productos.map((c) => {
                console.log(c)
                contador += c.oferta ? c.precioDeOferta * c.cantidad : c.precio * c.cantidad
            })
        }
        return contador
    }, [productos])


    return (

        <div className="container">
            <div className="container-product">
                {productos.map((c) =>

                    <ItemDeCarrito c={c} key={c.id} />

                )}


            </div>
            <div className="container-ticket">
                <div className="title">
                    <h3>Productos({cantidadTotal}):  ${valorTotal}</h3>
                    <Button variant='contained' fullWidth sx={{ top: 'unset', bottom: { sm: '0px', md: '10px' } }} onClick={efectuarCompra}>Comprar ahora</Button>
                </div>
            </div>
        </div>

    )
}
