import React, { useContext } from 'react'
import { userContext } from '../../graciasTotales/context/userContext'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const { user } = useContext(userContext);

    return (user.logged) ? children : <Navigate to='/auth/login' />
}
