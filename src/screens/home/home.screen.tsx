import React, { useCallback, useState } from 'react';

import { SafeAreaView, View } from 'react-native';

import Logo from '../../components/Logo/logo.component';
import PlayField from '../../components/PlayField/playField.component';

import styles from './home.styles';
import Timer from '../../components/Timer/timer.component';
import Background from '../../components/Background/background.component';

function Home(): React.JSX.Element {
  const [record, setRecord] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const onFinish = useCallback(() => {
    setIsFinished(true);
    setIsPlaying(false);

    if (!record || seconds < record) setRecord(seconds);
    setSeconds(0);
  }, [record, seconds]);

  const onStart = useCallback(() => {
    setIsFinished(false);
    setIsPlaying(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#606080' }}>
      <Background>
        <View style={styles.container}>
          <Logo />

          <View style={styles.playContainer}>
            {isPlaying && (
              <Timer
                record={record}
                onUpdate={setSeconds}
                stopTimer={isFinished}
              />
            )}

            <PlayField
              isPlaying={isPlaying}
              isFinished={isFinished}
              onStart={onStart}
              onFinish={onFinish}
            />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
}

export default Home;
