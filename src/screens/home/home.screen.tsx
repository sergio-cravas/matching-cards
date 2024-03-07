import React from 'react';

import { SafeAreaView, View } from 'react-native';

import styles from './home.styles';
import Logo from '../../components/Logo/logo.component';
import PlayFieldComponent from '../../components/PlayField/playField.component';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Logo />

        <PlayFieldComponent />
      </View>
    </SafeAreaView>
  );
}

export default Home;
