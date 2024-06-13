import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, tittle = 'Login' }) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction={'column'}
                alignItems={'center'}
                xs={12}
                justifyContent={'center'}
                sx={{ minHeight: '100vh', width: '100%', backgroundColor: 'primary.main', padding: 4 }}
            >

                <Grid
                    item
                    className='box-shadow'
                    xs={3}
                    sx={{
                        width: 450,
                        height: 450,
                        backgroundColor: 'white',
                        padding: 3,
                        borderRadius: 3
                    }}>
                    <Typography variant='h5' sx={{ mb: 1, ml: 15 }}>{tittle}</Typography>
                    {children}


                </Grid>

            </Grid>
        </>
    )
}
