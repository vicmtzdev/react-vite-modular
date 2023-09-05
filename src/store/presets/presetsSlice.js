import { createSlice } from '@reduxjs/toolkit';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Almendra',
    description: 'Las almendras son buenas para la salud y muy ricas en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado.',
    amount: 10,
    temperature: 80,
    time: 15,
    photo: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    user: {
        _id: '123',
        name: 'Victor'
    }
}

const tempEvent1 = {
    _id: new Date().getTime() + 1,
    title: 'Cebada',
    description: 'La cebada es buenas para la salud y muy rica en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado del elemento.',
    amount: 15,
    temperature: 75,
    time: 10,
    photo: 'https://img.freepik.com/fotos-premium/semillas-cebada-fondo-cascara-exterior-superficie-granos-cebada_191623-67.jpg?w=2000',
    user: {
        _id: '123',
        name: 'Victor'
    }
}

const tempEvent2 = {
    _id: new Date().getTime() + 2,
    title: 'Cacahuate',
    description: 'Los cacahuates son buenos para la salud y muy ricos en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado.',
    amount: 5,
    temperature: 80,
    time: 20,
    photo: 'https://img.freepik.com/premium-photo/salted-peanuts_38663-373.jpg?w=996',
    user: {
        _id: '123',
        name: 'Victor'
    }
}

export const presetsSlice = createSlice({
    name: 'presets',
    initialState: {
        presets: [tempEvent, tempEvent1, tempEvent2],
        activePreset: null,

    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activePreset = payload;
        },
        onSetNullEvent: (state) => {
            state.activePreset = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onSetNullEvent } = presetsSlice.actions;
