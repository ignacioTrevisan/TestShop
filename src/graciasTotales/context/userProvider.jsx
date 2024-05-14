import React, { useState } from 'react'
import { userContext } from './userContext'
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ user: '', logged: false })
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}
