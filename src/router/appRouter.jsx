import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/authRoutes'
import { GraciasRoutes } from '../graciasTotales/routes/graciasRoutes'
import { AppTheme } from '../theme/appTheme'
import { UserProvider } from '../graciasTotales/context/userProvider'
import { PrivateRoutes } from '../auth/routes/privateRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { FireBaseAuth } from '../firebase/config'
import { Login, logout } from '../store/auth/authSlice'
import { LoadPages } from '../ui/pages/loadPages'



export const AppRouter = () => {

    const dispatch = useDispatch();
    const { status } = useSelector(state => state.authSlice);
    useEffect(() => {
        onAuthStateChanged(FireBaseAuth, async (user) => {
            if (!user) return dispatch(logout(null));
            dispatch(Login({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                errorMessage: null,
            }))
        })
    }, [])

    if (status === 'Checking') {
        return <LoadPages />
    }
    return (
        <AppTheme>
            <UserProvider>

                <Routes>
                    {
                        status !== 'not-authenticated'
                            ? <Route path='/*' element={<GraciasRoutes />} />

                            : <Route path='/auth/*' element={<AuthRoutes />} />

                    }{
                        status !== 'logged' && <Route path='/*' element={<Navigate to='/auth/login' />} />
                    }
                </Routes>
            </UserProvider>



        </AppTheme >
    )
}

