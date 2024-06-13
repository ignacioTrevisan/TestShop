import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Historyitem } from './historyItem'


export const HistorySelected = ({ drawerWidth }) => {
    const { selected } = useSelector(state => state.shoppingSlice)
    const lista = selected.productos;


    return (

        <Grid
            container
            sx={{

                width: 'calc(100vw - 100px)',
                height: '100vh',
                marginLeft: { lg: `${drawerWidth.lg}px`, md: `${drawerWidth.md}px`, sm: `${drawerWidth.sm}px`, xs: `${drawerWidth.xs}px` },
                justifyContent: 'center'

            }}
        >
            <Grid container mt={12} xs={12} justifyContent={'center'} >
                <Grid item>
                    <h1>{selected.fecha}</h1>
                    <div style={{
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#ccc',
                        margin: '10px auto 20px auto',
                        borderRadius: '2px',
                    }}></div>

                </Grid>
            </Grid>

            <Grid item xs={10} sx={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '400px' }}>
                <Grid container justifyContent={'center'}>

                    <p>Sus compras ese dia:</p>
                </Grid>
                {

                    lista.map((l) => (


                        <Historyitem l={l} />


                    ))
                }
            </Grid>

        </Grid >



    )
}
