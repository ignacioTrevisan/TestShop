import React from 'react'
import { SideBar } from '../ui/sideBar'
import { NothingSelected } from '../ui/nothingSelected'
import { useSelector } from 'react-redux'
import { HistorySelected } from '../ui/historySelected'
import { Grid } from '@mui/material'

export const HistoryShopping = () => {
    const { isSelected } = useSelector(state => state.shoppingSlice)
    const drawerWidth = {
        lg: 300,
        md: 250,
        sm: 200,
        xs: 150
    };
    return (
        <>
            <Grid container>
                <SideBar drawerWidth={drawerWidth} />
                {
                    isSelected
                        ? <HistorySelected drawerWidth={drawerWidth} />
                        : <NothingSelected drawerWidth={drawerWidth} />}
            </Grid>

        </>
    )
}
