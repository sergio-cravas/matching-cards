import React, { useCallback, useState } from 'react';

import { SafeAreaView, View } from 'react-native';

import Logo from '../../components/Logo/logo.component';
import PlayField from '../../components/PlayField/playField.component';

import styles from './home.styles';
import Timer from '../../components/Timer/timer.component';
import Background from '../../components/Background/background.component';

function Home(): React.JSX.Element {
  const [record, setRecord] = useState<number>(0);
  const [stopTimer, setStopTimer] = useState<boolean>(true);

  const onFinish = useCallback(() => {
    setStopTimer(true);
  }, []);

  const onStart = useCallback(() => {
    setStopTimer(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#606080' }}>
      <Background>
        <View style={styles.container}>
          <Logo />

          <View style={styles.playContainer}>
            <Timer
              stopTimer={stopTimer}
              record={record}
              setRecord={setRecord}
            />

            <PlayField onStart={onStart} onFinish={onFinish} />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
}

export default Home;
