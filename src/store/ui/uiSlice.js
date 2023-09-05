import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isPresetModalOpen: false
    },
    reducers: {
        onOpenPresetModal: (state) => {
            state.isPresetModalOpen = true;
        },
        onClosePresetModal: (state) => {
            state.isPresetModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenPresetModal, onClosePresetModal } = uiSlice.actions;