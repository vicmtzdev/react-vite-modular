import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore, useForm } from '../../hooks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
}

export const RegisterPage = () => {

  const { startRegister, errorMessage } = useAuthStore();

  const { registerName, registerEmail, registerPassword, onInputChange: onRegisterInputChange } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    startRegister({ name: registerName, email: registerEmail, password: registerPassword });
  }

  useEffect(() => {

    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }

  }, [errorMessage])

  return (
    <AuthLayout title='Register' >
      <form onSubmit={registerSubmit} >

        <Grid container>
          
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Name' 
              type='text' 
              placeholder='name' 
              fullWidth
              name='registerName'
              value={registerName}
              onChange={onRegisterInputChange}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='E-mail' 
              type='email' 
              placeholder='e-mail@gmail.com' 
              fullWidth
              name='registerEmail'
              value={registerEmail}
              onChange={onRegisterInputChange}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Password' 
              type='password' 
              placeholder='password' 
              fullWidth
              name='registerPassword'
              value={registerPassword}
              onChange={onRegisterInputChange}
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth onClick={registerSubmit} >
                <Typography sx={{ mr: 0.7 }} > Create account </Typography> 
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }} > Do you already have an account? </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>

        </Grid>

      </form>
    </AuthLayout>
  )
}
