import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export const OranjeTheme = createTheme({
  palette: {
    primary: {
      main: '#E38D26'
    }, secondary: {
      main: '#9c27b0'
    }, error: {
      main: red.A400
    }, icons: {
      store: '#CCE326',
      offers: '#F44336',
      cart: '#2196F3',
      Logout: '#424242',
      about: '#B519FF',
      history: '#D1D1D1',
      sideBarItem: '#61A006'
    }

  }
})