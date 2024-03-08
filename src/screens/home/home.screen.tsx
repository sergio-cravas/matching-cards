import React, { useState } from 'react';

import { SafeAreaView, View } from 'react-native';

import Logo from '../../components/Logo/logo.component';
import PlayField from '../../components/PlayField/playField.component';

import styles from './home.styles';
import Timer from '../../components/Timer/timer.component';

function Home(): React.JSX.Element {
  const [stopTimer, setStopTimer] = useState(true);

  const onFinish = () => {
    setStopTimer(true);
  };

  const onStart = () => {
    setStopTimer(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Logo />

        <View style={styles.playContainer}>
          <Timer stopTimer={stopTimer} record={0} />

          <PlayField onStart={onStart} onFinish={onFinish} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
