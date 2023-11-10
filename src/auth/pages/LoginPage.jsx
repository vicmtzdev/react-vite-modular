import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm, useAuthStore } from '../../hooks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const loginFormFields = {
  loginEmail: '',
  loginPassword: '',
}

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  }

  useEffect(() => {

    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }

  }, [errorMessage])


  return (
    <AuthLayout title='Login' >  
      <form onSubmit={loginSubmit}>

          <Grid container>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label='E-mail' 
                type='email' 
                placeholder='e-mail@gmail.com' 
                fullWidth
              name='loginEmail'
              value={loginEmail}
              onChange={onLoginInputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label='Password' 
                type='password' 
                placeholder='password' 
                fullWidth
              name='loginPassword'
              value={loginPassword}
              onChange={onLoginInputChange}
              />
            </Grid>
          
            <Grid container sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
              <Button variant='contained' fullWidth onClick={loginSubmit}>
                  <Typography sx={{ mr: 0.7 }} > Login </Typography> 
                  <LoginOutlined sx={{ fontSize: 25 }} />
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Create an account
              </Link>
            </Grid>

          </Grid>
       
        </form>
    </AuthLayout>
  )
}
