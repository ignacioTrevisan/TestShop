import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PaginaPrincipal } from '../pages/paginaPrincipal'
import { Navbar } from '../ui/navbar'
import { ItemView } from '../pages/itemView'
import { ProductosOriginalesProvider } from '../context/productosOriginalesProvider'
import { useDispatch } from 'react-redux'
import { empezarACargarHistorial, getProducts } from '../../store/'
import { HistoryShopping } from '../pages/historyShopping'
import { CarritoView } from '../pages/carritoView'

export const GraciasRoutes = () => {
    const dispatch = useDispatch();
    dispatch(getProducts());
    dispatch(empezarACargarHistorial());
    return (
        <>

            <ProductosOriginalesProvider>
                <Navbar />
                <Routes>

                    <Route path='/carrito/*' element={<CarritoView />} />
                    <Route path='/' element={<PaginaPrincipal />} />
                    <Route path='/ofertas/*' element={<PaginaPrincipal />} />
                    <Route path='/historial/*' element={<HistoryShopping />} />
                    <Route path='/item/:id' element={<ItemView />} />
                    <Route path='/*' element={<Navigate to='/' />} />

                </Routes>

                {/* <Route path='/*' element={<Navigate to='/' />} /> */}
            </ProductosOriginalesProvider>


        </>
    )
}
