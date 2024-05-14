import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Price = ({ offer, price, offerPrice }) => {
    return (

        <>

            {offer === true ?


                <Grid container>
                    <Typography sx={{ ml: 1 }}>Precio: ${offerPrice}</Typography>
                    <Typography sx={{ textDecoration: 'line-through', color: 'red' }}>({price})</Typography>
                </Grid>
                :
                <Grid container>
                    <Typography sx={{ ml: 1 }}>Precio: ${price}</Typography>
                </Grid>
            }
        </>
    )
}
