import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';

import styles from './timer.styles';

type Props = {
    record: number;
    stopTimer: boolean;
};

const Timer = ({ record, stopTimer }: Props) => {
    const [seconds, setSeconds] = useState<number>(0);

    const transformSecondsIntoString = (secs: number): string => {
        const hours = Math.floor(secs / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout = setInterval(() => setSeconds((prevSeconds) => prevSeconds + 1), 1000);

        if (stopTimer) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [stopTimer]);

    return (
        <View style={styles.container}>
            <Text style={styles['record-time']}>{transformSecondsIntoString(record)}</Text>
            <Text style={styles['current-timer']}>{transformSecondsIntoString(seconds)}</Text>
        </View>
    );
};

export default React.memo(Timer);
