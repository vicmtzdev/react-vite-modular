import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, presetsSlice, controlSlice } from './';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        presets: presetsSlice.reducer,
        control: controlSlice.reducer,
    }
})
