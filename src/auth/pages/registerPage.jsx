import React, { useState } from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Link as linkRouter } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { UseForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { RegisterEmaiAndPassword } from '../../store/'

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const formValidations = {
        password: [(value) => value.length > 5 && /[A-Z]/.test(value), 'La contraseña debe contener una mayuscula y mas de 5 digitos'],
        email: [(value) => (value.includes('@gmail') || value.includes('@hotmail') || value.includes('@outlook')) && value.includes('.'), 'Ingrese un correo electronico valido'],
        displayName: [(value) => value.length > 0, 'El nombre es obligatorio'],
    }

    const formData = {
        displayName: '',
        email: '',
        password: '',
    }
    const { formState, OnInputchange, reset, displayName, email, password, formValidation, isFormValid, displayNameValid, emailValid, passwordValid } = UseForm(formData, formValidations);

    const [subido, setSubido] = useState(false);
    const submit = (event) => {
        event.preventDefault();
        setSubido(true);
        if (isFormValid === true) {
            dispatch(RegisterEmaiAndPassword(email, password, displayName));
        }
    }


    return (
        <AuthLayout tittle={'Iniciar sesion'}>
            <form onSubmit={submit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Usuario'
                            name='displayName'
                            error={displayNameValid !== null && subido ? true : false}
                            value={displayName}
                            helperText={displayNameValid !== null && subido ? displayNameValid : null}
                            onChange={OnInputchange}
                            placeholder='Ingrese usuario'
                        />
                        <TextField
                            fullWidth
                            label='Email'
                            placeholder='Ingrese email'
                            type='email'
                            name='email'
                            value={email}
                            error={emailValid !== null && subido ? true : false}
                            helperText={emailValid !== null && subido ? emailValid : null}
                            onChange={OnInputchange}
                            sx={{ mt: 1 }}
                        />
                        <TextField
                            fullWidth
                            label='Contraseña'
                            placeholder='Ingrese contraseña'
                            type='password'
                            name='password'
                            value={password}
                            error={passwordValid !== null && subido ? true : false}
                            helperText={passwordValid !== null && subido ? passwordValid : null}
                            onChange={OnInputchange}
                            sx={{ mt: 1 }}
                        />
                    </Grid>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth type='submit'>
                                Iniciar
                            </Button>
                            <Grid
                                container
                                justifyContent={'end'}
                                mt={1}
                            >
                                <Typography>
                                    ¿Ya tienes cuenta?
                                </Typography>
                                <Link
                                    color={'inherit'}
                                    component={linkRouter}
                                    to='/auth/login'
                                    ml={1}
                                >
                                    Iniciar sesión
                                </Link>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout >
    )
}
