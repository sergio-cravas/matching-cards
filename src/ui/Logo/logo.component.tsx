import React from 'react';
import { View, Text } from 'react-native';
import styles from './logo.styles';

function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles['first-title']}>MATCHING</Text>
      <Text style={styles['second-title']}>CARDS</Text>
    </View>
  );
}

export default React.memo(Logo);
