import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, presetsSlice, controlSlice, authSlice } from './';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        presets: presetsSlice.reducer,
        control: controlSlice.reducer,
    }
})
