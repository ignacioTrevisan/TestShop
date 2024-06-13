import { Box, Divider, Drawer, Grid, List, Typography } from '@mui/material'
import React from 'react'
import { SideBarItem } from './sideBarItem'
import { useSelector } from 'react-redux'
import { HistorySelected } from './historySelected'

export const SideBar = ({ drawerWidth }) => {


    const { lista } = useSelector(state => state.shoppingSlice);
    // const { isSelected } = useSelector(state => state.shoppingSlice)
    // console.log(isSelected);
    return (
        <Grid zIndex={1} top={'0px'}>

            <Box
                component="nav"
                sx={{ flexShrink: { sm: 0 }, width: '100%' }}

            >
                <Drawer
                    variant="permanent"
                    open
                    sx={{
                        width: '100%',
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { marginTop: { lg: '12px', md: '-20px', sm: '-10px', xs: '0px' }, width: { lg: `${drawerWidth.lg}px`, md: `${drawerWidth.md}px`, sm: `${drawerWidth.sm}px`, xs: `${drawerWidth.xs}px` }, boxSizing: 'border-box', top: { sm: 65, xs: 57, md: 80 }, backgroundColor: '#E1E3E3' },
                    }}
                >
                    <List>
                        {lista.map(producto => (
                            <SideBarItem key={producto.id} {...producto} fecha={producto.fecha} />
                        ))}
                    </List>
                </Drawer>
            </Box>


        </Grid >
    )
}
