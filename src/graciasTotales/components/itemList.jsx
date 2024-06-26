
import { Button, Grid, Typography } from '@mui/material'
import { Item } from './item'
import MiniMenuDesplegable from './menu'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const ItemList = ({ productos, cambiarFiltro, filtro, ordenar }) => {

    const { products } = useSelector(state => state.productosSlice);
    const [botonesDisplay, setBotonesDisplay] = useState('none')
    useEffect(() => {
        if (products.length > 0) {
            setBotonesDisplay('');
        }
    }, [products])

    const [display, setDisplay] = useState('flex');
    const parametro = useParams();
    useEffect(() => {
        setDisplay('none')
    }, [parametro])

    useEffect(() => {
        setDisplay('flex')
    }, [display])

    const ordenarEsto = () => {
        setDisplay('none')
        ordenar();
    }
    const setFiltroEsto = (tipo) => {
        setDisplay('none')
        cambiarFiltro(tipo);
    }


    return (
        <Grid container justifyContent={'center'} spacing={0} sx={{
            display: display,
            alignItems: 'center',
            mt: 13,
            mb: 2,
            width: '90%',
            backgroundColor: 'white',
            height: '100%',
            minHeight: '70vh',
        }}>

            <Grid container justifyContent={'center'} >
                <Grid container className='animate_animated animate__bounceInLeft' sx={{ ml: 10, mb: 2, mt: 1 }} display={botonesDisplay}>
                    <MiniMenuDesplegable sx={{ mt: 10 }} setFiltroEsto={setFiltroEsto} filtro={filtro} />
                    <Button onClick={ordenarEsto} sx={{ height: '40px' }}> ordenar por precio</Button>
                </Grid>
                {productos && productos.map((p) => {
                    return <Item producto={p} key={p.id} />
                })}
            </Grid>
        </Grid>
    )
}
