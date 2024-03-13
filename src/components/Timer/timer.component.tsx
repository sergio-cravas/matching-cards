import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';

import styles from './timer.styles';

type Props = {
  record: number;
  stopTimer: boolean;
  onUpdate: (value: number) => void;
};

function Timer({ record, stopTimer, onUpdate }: Props) {
  const [seconds, setSeconds] = useState<number>(0);

  const transformSecondsIntoString = (secs: number): string => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const _seconds = secs % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = _seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(
      () => setSeconds((prev: number) => prev + 1),
      1000,
    );

    if (stopTimer) clearInterval(interval);

    return () => clearInterval(interval);
  }, [stopTimer]);

  useEffect(() => onUpdate(seconds), [seconds, onUpdate]);

  return (
    <View style={styles.container}>
      <Text style={styles['record-time']}>
        {transformSecondsIntoString(record)}
      </Text>

      <Text style={styles['current-timer']}>
        {transformSecondsIntoString(seconds)}
      </Text>
    </View>
  );
}

export default React.memo(Timer);
