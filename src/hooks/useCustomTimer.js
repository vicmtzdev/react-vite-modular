import { useEffect, useState } from 'react';
import { useControlStore } from './useControlStore';


export const useCustomTimer = () => {

    const { startWork, stopOperation } = useControlStore();

    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {

        if (secondsLeft <= 0) {
            stopOperation();
            return;
        }

        const timeout = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        return () => clearTimeout(timeout);

    }, [secondsLeft]);

    const startTimer = (seconds) => {
        startWork();
        setSecondsLeft(seconds);
    }

    return {
        secondsLeft,
        startTimer,
    }

}