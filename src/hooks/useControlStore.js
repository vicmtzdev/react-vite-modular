import { useDispatch, useSelector } from 'react-redux';
import { onMachineIsHeating, onMachineIsStopped, onMachineIsTakingOut, onMachineIsWorking, onSetReferenceTemperature } from '../store';

export const useControlStore = () => {

    const dispatch = useDispatch();
    const { machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature } = useSelector(state => state.control);


    const startHeat = () => {
        //TODO: Llegar al backend, todo bien...
        dispatch(onMachineIsHeating());
    }

    const startWork = () => {
        //TODO: Llegar al backend, todo bien...
        dispatch(onMachineIsWorking());
    }

    const startTakeOut = () => {
        //TODO: Llegar al backend, todo bien...
        dispatch(onMachineIsTakingOut());
    }

    const stopOperation = () => {
        //TODO: Llegar al backend, todo bien...
        dispatch(onMachineIsStopped());
    }

    const setTemperature = (payload) => {
        //TODO: Llegar al backend, todo bien...
        dispatch(onSetReferenceTemperature(payload));
    }


    return {

        //* Propiedades
        machineIsHeating,
        machineIsWorking,
        machineIsTakingOut,
        referenceTemperature,

        //* Métodos
        startHeat,
        startWork,
        startTakeOut,
        stopOperation,
        setTemperature,

    }

}