import { useDispatch, useSelector } from 'react-redux';
import { onMachineIsHeating, onMachineIsStopped, onMachineIsTakingOut, onMachineIsWorking, onSetReferenceTemperature } from '../store';

export const useControlStore = () => {

    const dispatch = useDispatch();
    const { machineIsHeating, machineIsWorking, machineIsTakingOut, referenceTemperature } = useSelector(state => state.control);


    const startHeat = async () => {

        dispatch(onMachineIsHeating());

    }

    const startWork = () => {

        dispatch(onMachineIsWorking());
    }

    const startTakeOut = () => {

        dispatch(onMachineIsTakingOut());
    }

    const stopOperation = () => {

        dispatch(onMachineIsStopped());
    }

    const setTemperature = (payload) => {

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