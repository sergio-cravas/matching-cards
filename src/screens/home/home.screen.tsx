import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import Logo from '../../components/Logo/logo.component';
import Timer from '../../components/Timer/timer.component';
import PlayField from '../../components/PlayField/playField.component';
import Background from '../../components/Background/background.component';
import FinishMessage from '../../components/FinishMessage/finishMessage.component';

import styles from './home.styles';

function Home(): React.JSX.Element {
  const [record, setRecord] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isNewRecord, setIsNewRecord] = useState<boolean>(true);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isFirstPlay, setIsFirstPlay] = useState<boolean>(false);

  const onFinish = useCallback(() => {
    setIsFinished(true);
    setIsPlaying(false);

    if (seconds && (!record || seconds < record)) {
      setIsNewRecord(true);
      setRecord(seconds);
    } else if (seconds) {
      setIsNewRecord(false);
    }

    setSeconds(0);
  }, [record, seconds]);

  const onStart = useCallback(() => {
    setIsFirstPlay(true);

    setIsFinished(false);
    setIsPlaying(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#606080' }}>
      <Background>
        <View style={styles.container}>
          <Logo />

          <View style={styles.playContainer}>
            {isFirstPlay && (
              <Timer
                record={record}
                seconds={seconds}
                stopTimer={!isPlaying}
                onUpdate={setSeconds}
              />
            )}

            <View style={{ position: 'relative' }}>
              <PlayField
                isPlaying={isPlaying}
                isFinished={isFinished}
                onStart={onStart}
                onFinish={onFinish}
              />

              {isFinished && (
                <FinishMessage isNewRecord={isNewRecord} onReset={onStart} />
              )}
            </View>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
}

export default Home;
