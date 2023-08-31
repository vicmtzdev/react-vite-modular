import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login' >  
        <form>

          <Grid container>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label='E-mail' 
                type='email' 
                placeholder='e-mail@gmail.com' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label='Password' 
                type='password' 
                placeholder='password' 
                fullWidth
              />
            </Grid>
          
            <Grid container sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
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
