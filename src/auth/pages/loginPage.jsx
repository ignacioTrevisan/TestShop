import React, { useContext, useEffect, useState } from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as linkRouter, useNavigate } from 'react-router-dom'
import { userContext } from '../../graciasTotales/context/userContext'
import { useDispatch, useSelector } from 'react-redux'
import { LoginWithEmailAndPassword, signWithGoogle } from '../../store/'
import { UseForm } from '../../hooks/useForm'

export const LoginPage = () => {

    const { errorMessage } = useSelector(state => state.authSlice);


    const { OnInputchange, email, password } = UseForm({ email: '', password: '' });

    const dispatch = useDispatch();

    const [alerta, setAlerta] = useState(
        {
            display: 'none',
            div: 'danger',
            alerta: 'Usuario incorrecto, por favor verifique sus credenciales'
        }
    );
    const avisarDatosIncorrectos = (mensaje) => {
        setAlerta({
            display: 'flex',
            div: 'danger',
            alerta: errorMessage
        })
    }
    const avisarCargarDatos = () => {
        setAlerta({
            display: 'flex',
            div: 'info',
            alerta: 'Por favor cargue sus datos'
        })
    }
    useEffect(() => {
        if (errorMessage !== '' && errorMessage !== null) {
            console.log(errorMessage)
            avisarDatosIncorrectos(errorMessage);
        } else {
            setAlerta({
                display: 'none'
            })
        }
    }, [errorMessage])

    const OnsignWithGoogle = () => {
        dispatch(signWithGoogle());
    }
    const submit = (event) => {
        event.preventDefault();
        dispatch(LoginWithEmailAndPassword(email, password))
    }

    return (
        <AuthLayout tittle={'Iniciar sesion'}>
            <form onSubmit={submit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>



                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Usuario'
                            placeholder='Ingrese usuario'
                            name='email'
                            value={email}
                            onChange={OnInputchange}
                        />
                        <TextField
                            fullWidth
                            label='Contraseña'
                            placeholder='Ingrese contraseña'
                            type='password'
                            name='password'
                            value={password}
                            onChange={OnInputchange}
                            sx={{ mt: 1 }}
                        />
                        <Grid item display={alerta.display} justifyContent={'center'} xs={12} mt={2} >
                            <div className={`alert alert-${alerta.div} container fluid`} role="alert" display='none'>
                                {alerta.alerta}
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 0 }}>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' type='submit' fullWidth>
                                Iniciar
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Button variant='contained' fullWidth onClick={OnsignWithGoogle}>
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
