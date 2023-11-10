import { useEffect, useState } from 'react';
import { useControlStore } from './useControlStore';


export const useCustomTimerTakeOut = () => {

    const { startTakeOut, stopOperation, machineIsTakingOut } = useControlStore();

    const [secondsLeftTakeOut, setSecondsLeftTakeOut] = useState(0);
    const [minutesLeftTakeOut, setMinutesLeftTakeOut] = useState(0);

    useEffect(() => {

        if (!machineIsTakingOut) {
            setSecondsLeftTakeOut(0);
            setMinutesLeftTakeOut(0);
        }

        if ((minutesLeftTakeOut <= 0) && (secondsLeftTakeOut <= 0)) {
            stopOperation();
            return;
        }

        if ((minutesLeftTakeOut >= 0) && (secondsLeftTakeOut >= 0) && (machineIsTakingOut)) {

            const timeout = setTimeout(() => {
                setSecondsLeftTakeOut(secondsLeftTakeOut - 1);
            }, 1000);

            //return () => clearTimeout(timeout);

        }

        if ((minutesLeftTakeOut >= 0) && (secondsLeftTakeOut < 0)) {
            setMinutesLeftTakeOut(minutesLeftTakeOut - 1)
            setSecondsLeftTakeOut(59);
        }


    }, [secondsLeftTakeOut, minutesLeftTakeOut]);

    const startTimerTakeOut = (minutes) => {
        startTakeOut();
        setMinutesLeftTakeOut(minutes);
    }

    return {
        secondsLeftTakeOut,
        minutesLeftTakeOut,
        startTimerTakeOut,
    }

}