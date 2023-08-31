import { Navigate, Route, Routes } from 'react-router-dom';
import { PresetsPage } from '../pages/PresetsPage';

export const PresetsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PresetsPage />} />
        
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
