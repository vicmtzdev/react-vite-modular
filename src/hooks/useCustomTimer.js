import { useEffect, useState } from 'react';
import { useControlStore } from './useControlStore';


export const useCustomTimer = () => {

    const { startWork, stopOperation, machineIsWorking } = useControlStore();

    const [secondsLeft, setSecondsLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);

    useEffect(() => {

        if (!machineIsWorking) {
            setSecondsLeft(0);
        }

        if ((minutesLeft <= 0) && (secondsLeft <= 0)) {
            stopOperation();
            return;
        }

        if ((minutesLeft >= 0) && (secondsLeft >= 0) && (machineIsWorking)) {

            const timeout = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            //return () => clearTimeout(timeout);

        }

        if ((minutesLeft >= 0) && (secondsLeft < 0)) {
            setMinutesLeft(minutesLeft - 1)
            setSecondsLeft(59);
        }


    }, [secondsLeft, minutesLeft]);

    const startTimer = (minutes) => {
        startWork();
        setMinutesLeft(minutes);
    }

    return {
        secondsLeft,
        minutesLeft,
        startTimer,
    }

}