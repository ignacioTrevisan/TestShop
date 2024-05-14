import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Carrito } from '../pages/carrito'
import { PaginaPrincipal } from '../pages/paginaPrincipal'
import { Navbar } from '../ui/navbar'
import { CarritoProvider } from '../context/carritoProvider'
import { ItemView } from '../pages/itemView'
import { ProductosOriginalesProvider } from '../context/productosOriginalesProvider'

export const GraciasRoutes = () => {


    return (
        <>
            <CarritoProvider>
                <ProductosOriginalesProvider>
                    <Navbar />

                    <Routes>

                        <Route path='/carrito/*' element={<Carrito />} />
                        <Route path='/' element={<PaginaPrincipal />} />
                        <Route path='/ofertas/*' element={<PaginaPrincipal />} />
                        <Route path='/item/:id' element={<ItemView />} />

                    </Routes>

                    {/* <Route path='/*' element={<Navigate to='/' />} /> */}
                </ProductosOriginalesProvider>
            </CarritoProvider>

        </>
    )
}
