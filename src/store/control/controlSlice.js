import { createSlice } from '@reduxjs/toolkit';

export const controlSlice = createSlice({
    name: 'control',
    initialState: {
        machineIsHeating: false,
        machineIsWorking: false,
        referenceTemperature: 70,
    },
    reducers: {
        onMachineIsHeating: (state) => {
            state.machineIsHeating = true;
            state.machineIsWorking = false;
        },
        onMachineIsWorking: (state) => {
            state.machineIsHeating = false;
            state.machineIsWorking = true;
        },
        onMachineIsStopped: (state) => {
            state.machineIsHeating = false;
            state.machineIsWorking = false;
        },
        onSetReferenceTemperature: (state, { payload }) => {
            state.referenceTemperature = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onMachineIsHeating, onMachineIsWorking, onMachineIsStopped, onSetReferenceTemperature } = controlSlice.actions;