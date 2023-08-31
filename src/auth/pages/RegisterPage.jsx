import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register' >
      <form>

        <Grid container>
          
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Name' 
              type='text' 
              placeholder='name' 
              fullWidth
            />
          </Grid>

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
