import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { modularApi } from '../api';
import { onAddNewEvent, onDeleteEvent, onLoadEvent, onSetActiveEvent, onSetNullEvent, onUpdateEvent } from '../store';

export const usePresetsStore = () => {

    const dispatch = useDispatch();
    const { presets, activePreset } = useSelector(state => state.presets);
    const { user } = useSelector(state => state.auth);


    const setActiveEvent = (presetEvent) => {
        dispatch(onSetActiveEvent(presetEvent));
    }

    const setNullEvent = () => {
        dispatch(onSetNullEvent());
    }

    const startSavingEvent = async (presetEvent) => {

        try {

            if (presetEvent.id) {

                // Actualizando
                await modularApi.put(`/presets/${presetEvent.id}`, presetEvent);
                dispatch(onUpdateEvent({ ...presetEvent, user }));
                return;

            }

            // Creando
            const { data } = await modularApi.post('/presets', presetEvent);
            dispatch(onAddNewEvent({ id: data.preset.id, ...presetEvent, user }));

        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }


    const startDeletingEvent = async () => {

        try {

            await modularApi.delete(`/presets/${activePreset.id}`);
            dispatch(onDeleteEvent());

        } catch (error) {

            Swal.fire('Error al eliminar', error.response.data.msg, 'error');

        }


    }

    const startLoadingPresets = async () => {

        try {

            const { data } = await modularApi.get('/presets');
            dispatch(onLoadEvent(data.presets));
            //console.log(data.presets);

        } catch (error) {

            console.log(error);
            console.log('Error cargando eventos');

        }

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
        startLoadingPresets,
    }
}
