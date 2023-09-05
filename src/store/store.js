import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, presetsSlice } from './';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        presets: presetsSlice.reducer,
    }
})
