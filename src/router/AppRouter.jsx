import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PresetsRoutes } from '../presets/routes/PresetsRoutes';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export const AppRouter = () => {

  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {

    checkAuthToken();

  }, [])

  if (status === 'checking') {

    return (
      <Box display='flex' width='100vw' height='100vh' justifyContent='center' alignItems='center' bgcolor='primary.main' >
        <CircularProgress color='blanco' />
      </Box>
    )

  }


  return (
    <>

    <Routes>

        {
          (status === 'not-authenticated')
            ? <Route path='/auth/*' element={<AuthRoutes />} />
            : <Route path='/*' element={<PresetsRoutes />} />
        }

        <Route path='/*' element={<Navigate to='/auth/login' />} />
    
    </Routes>    
    
    </>
  )
}
