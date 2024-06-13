import { Grid, Typography } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/Polite Chicky.json';

export const NothingSelected = ({ drawerWidth }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <Grid
                container
                sx={{

                    width: 'calc(100vw - 100px)',
                    height: '100vh',
                    // height:'100%',
                    marginLeft: { lg: `${drawerWidth.lg}px`, md: `${drawerWidth.md}px`, sm: `${drawerWidth.sm}px`, xs: `${drawerWidth.xs}px` },
                    marginTop: '50px'
                }}
                justifyContent='center'
                alignItems='center'
                direction="column"
            >
                <Grid item sx={{ display: 'flex', width: { xs: '150px', sm: '300px' }, justifyContent: 'center' }}>
                    <Lottie options={defaultOptions} width={'100%'} height={'100%'} />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Typography sx={{ fontSize: { sm: '20px', md: '40px' } }}>Seleccione una fecha...</Typography>
                </Grid>
            </Grid >
        </>
    )
}
