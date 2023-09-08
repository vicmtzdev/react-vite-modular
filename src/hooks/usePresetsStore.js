import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onSetNullEvent, onUpdateEvent } from '../store';

export const usePresetsStore = () => {

    const dispatch = useDispatch();
    const { presets, activePreset } = useSelector(state => state.presets);

    const setActiveEvent = (presetEvent) => {
        dispatch(onSetActiveEvent(presetEvent));
    }

    const setNullEvent = () => {
        dispatch(onSetNullEvent());
    }

    const startSavingEvent = async (presetEvent) => {
        //TODO: Llegar al backend, todo bien... 

        if (presetEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({ ...presetEvent }));
        } else {
            // Creando 
            dispatch(onAddNewEvent({ _id: new Date().getTime(), ...presetEvent }));
        }
    }


    const startDeletingEvent = () => {
        //TODO: Llegar al backend, todo bien...

        dispatch(onDeleteEvent());
    }

    return {

        //* Propiedades
        presets,
        activePreset,

        //* Metodos
        setActiveEvent,
        setNullEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
