import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent, onSetNullEvent } from '../store';

export const usePresetsStore = () => {

    const dispatch = useDispatch();
    const { presets, activePreset } = useSelector(state => state.presets);

    const setActiveEvent = (presetEvent) => {
        dispatch(onSetActiveEvent(presetEvent));
    }

    const setNullEvent = () => {
        dispatch(onSetNullEvent());
    }

    return {

        //* Propiedades
        presets,
        activePreset,

        //* Metodos
        setActiveEvent,
        setNullEvent,
    }
}
