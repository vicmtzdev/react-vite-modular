import { useDispatch, useSelector } from 'react-redux';
import { onClosePresetModal, onOpenPresetModal } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();
    const { isPresetModalOpen } = useSelector(state => state.ui);

    const openPresetModal = () => {
        dispatch(onOpenPresetModal());
    }

    const closePresetModal = () => {
        dispatch(onClosePresetModal());
    }

    return {
        //* Propiedades
        isPresetModalOpen,

        //* Metodos
        openPresetModal,
        closePresetModal,

    }

}
