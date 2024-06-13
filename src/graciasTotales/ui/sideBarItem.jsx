import { CardTravel, ShoppingBag, ShoppingBasket, ShoppingBasketOutlined, ShoppingBasketSharp, TurnedInNot } from '@mui/icons-material'
import { Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { isSelected } from '../../store/shoppingHistory/shoppingSlice';

export const SideBarItem = ({ productos, fecha }) => {
    const prod = [];
    let body = '';
    productos.map((p) => {
        prod.push(p);
        body += p.titulo
    })
    const newBody = useMemo(() => {
        return body.length > 20
            ? body.substring(0, 20) + '...'
            : body
    }, [body])
    const dispatch = useDispatch();
    const onSelectHistory = () => {
        dispatch(isSelected({ productos, fecha }))
    }
    return (
        <ListItem disablePadding onClick={onSelectHistory} >
            <ListItemButton >
                <ListItemIcon>
                    <IconButton sx={{ color: 'icons.sideBarItem' }}>
                        <ShoppingBag />

                    </IconButton>
                </ListItemIcon>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText primary={fecha} sx={{ color: 'white' }} />
                    </Grid>
                    <Grid item xs={12}>

                        <ListItemText secondary={newBody} />
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
