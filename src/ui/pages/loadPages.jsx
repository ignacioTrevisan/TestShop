import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const LoadPages = () => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ minHeight: '100vh', width: '100%', backgroundColor: '#E38D26', padding: 4 }}
            >
                <Grid item>
                    <CircularProgress color='warning' />
                </Grid>
            </Grid>
        </>
    )
}
