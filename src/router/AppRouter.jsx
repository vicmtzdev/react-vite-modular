import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PresetsRoutes } from '../presets/routes/PresetsRoutes';

export const AppRouter = () => {
  return (
    <>
    
    <Routes>

        <Route path='/auth/*' element={<AuthRoutes />} />

        <Route path='/*' element={<PresetsRoutes />} />
    
    </Routes>    
    
    </>
  )
}
