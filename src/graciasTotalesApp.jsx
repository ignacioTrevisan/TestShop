import React from 'react'
import { AppRouter } from './router/appRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './store/store'

export const GraciasTotalesApp = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}
