import { createSlice } from '@reduxjs/toolkit';

export const controlSlice = createSlice({
    name: 'control',
    initialState: {
        machineIsHeating: false,
        machineIsWorking: false,
        machineIsTakingOut: false,
        referenceTemperature: 70,
    },
    reducers: {
        onMachineIsHeating: (state) => {
            state.machineIsHeating = true;
            state.machineIsWorking = false;
            state.machineIsTakingOut = false;
        },
        onMachineIsWorking: (state) => {
            state.machineIsHeating = false;
            state.machineIsWorking = true;
            state.machineIsTakingOut = false;
        },
        onMachineIsTakingOut: (state) => {
            state.machineIsHeating = false;
            state.machineIsWorking = false;
            state.machineIsTakingOut = true;
        },
        onMachineIsStopped: (state) => {
            state.machineIsHeating = false;
            state.machineIsWorking = false;
            state.machineIsTakingOut = false;
        },
        onSetReferenceTemperature: (state, { payload }) => {
            state.referenceTemperature = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onMachineIsHeating, onMachineIsWorking, onMachineIsTakingOut, onMachineIsStopped, onSetReferenceTemperature } = controlSlice.actions;