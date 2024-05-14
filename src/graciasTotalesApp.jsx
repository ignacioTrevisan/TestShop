import React from 'react'
import { AppRouter } from './router/appRouter'
import { BrowserRouter } from 'react-router-dom'

export const GraciasTotalesApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
