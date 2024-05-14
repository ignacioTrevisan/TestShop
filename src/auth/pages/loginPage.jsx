import React, { useContext, useState } from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Button, Grid, IconButton, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Navigate, Link as linkRouter, useNavigate } from 'react-router-dom'
import { UserProvider } from '../../graciasTotales/context/userProvider'
import { userContext } from '../../graciasTotales/context/userContext'

export const LoginPage = () => {
    const [usuario, setUsuario] = useState('');

    const [contrasena, setContrasena] = useState('');
    const { user, setUser } = useContext(userContext);


    const [alerta, setAlerta] = useState(
        {
            display: 'none',
            div: 'danger',
            alerta: 'Usuario incorrecto, por favor verifique sus credenciales'
        }
    );
    const avisarDatosIncorrectos = () => {
        setAlerta({
            display: 'flex',
            div: 'danger',
            alerta: 'Usuario incorrecto, por favor verifique sus credenciales'
        })
    }
    const avisarCargarDatos = () => {
        setAlerta({
            display: 'flex',
            div: 'info',
            alerta: 'Por favor cargue sus datos'
        })
    }

    const navigate = useNavigate();
    const logear = () => {
        if (usuario === '' && contrasena === '') {
            avisarCargarDatos();
        } else if (usuario !== '' || contrasena !== '1234') {
            avisarDatosIncorrectos();
        }
        if (usuario !== '' && contrasena === '1234') {
            setUser({ user: usuario, logged: true })
            navigate('/')
        }
    }

    return (
        <AuthLayout tittle={'Iniciar sesion'}>
            <form>
                <Grid container>
                    <Grid item display={alerta.display} justifyContent={'center'} xs={12} >
                        <div className={`alert alert-${alerta.div} container fluid`} role="alert" display='none'>
                            {alerta.alerta}
                        </div>
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Usuario'
                            placeholder='Ingrese usuario'
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label='Contraseña'
                            placeholder='Ingrese contraseña'
                            type='password'
                            sx={{ mt: 1 }}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' onClick={logear} fullWidth>
                                Iniciar
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' fullWidth >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                        <Grid
                            container
                            justifyContent={'end'}
                            mt={1}
                        >
                            <Typography>
                                ¿No tienes cuenta?
                            </Typography>
                            <Link
                                color={'inherit'}
                                component={linkRouter}
                                to='/auth/register'
                                ml={1}
                            >
                                Registrar
                            </Link>

                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout >
    )
}
