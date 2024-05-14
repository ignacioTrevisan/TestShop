import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/authRoutes'
import { GraciasRoutes } from '../graciasTotales/routes/graciasRoutes'
import { AppTheme } from '../theme/appTheme'
import { UserProvider } from '../graciasTotales/context/userProvider'
import { PrivateRoutes } from '../auth/routes/privateRoutes'



export const AppRouter = () => {
    return (
        <AppTheme>
            <UserProvider>

                <Routes>
                    <Route path='/auth/*' element={

                        <AuthRoutes />

                    } />
                    <Route path='/' element={
                        <PrivateRoutes>

                            <GraciasRoutes />
                        </PrivateRoutes>
                    } />
                    <Route path='/*' element={
                        <PrivateRoutes>

                            <GraciasRoutes />
                        </PrivateRoutes>
                    } />
                </Routes>
            </UserProvider>



        </AppTheme >
    )
}

