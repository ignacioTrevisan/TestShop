import React from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Link as linkRouter } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

export const RegisterPage = () => {
    return (
        <AuthLayout tittle={'Iniciar sesion'}>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Usuario'
                            placeholder='Ingrese usuario'
                        />
                        <TextField
                            fullWidth
                            label='Email'
                            placeholder='Ingrese email'
                            type='email'
                            sx={{ mt: 1 }}
                        />
                        <TextField
                            fullWidth
                            label='Contraseña'
                            placeholder='Ingrese contraseña'
                            type='password'
                            sx={{ mt: 1 }}
                        />
                    </Grid>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>
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
