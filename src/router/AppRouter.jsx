import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PresetsRoutes } from '../presets/routes/PresetsRoutes';
import { useAuthStore, useControlStore } from '../hooks';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

import Swal from 'sweetalert2';
import { modularApi } from '../api';

export const AppRouter = () => {

  const { checkAuthToken, status } = useAuthStore();
  const { machineIsWorking, machineIsHeating, machineIsTakingOut, referenceTemperature } = useControlStore();

  useEffect(() => {

    checkAuthToken();

  }, [])

  useEffect(() => {

    const controlChange = async (machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature) => {
      try {

        await modularApi.put('/event/654bea5a88613d704148310f', { machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature });

      } catch (error) {

        Swal.fire('Error al ejecutar la acción', error.response.data.msg, 'error');

      }
    }

    controlChange(machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature);

  }, [machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature])

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
