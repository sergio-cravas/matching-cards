import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './finishMessage.styles';

type Props = {
  isNewRecord: boolean;
  onReset: () => void;
};

function FinishMessage({ isNewRecord, onReset }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isNewRecord ? 'Wonderful!' : 'You almost got it!'}
      </Text>

      <Pressable onPress={onReset}>
        <Text style={styles.resetButton}>NEW GAME</Text>
      </Pressable>
    </View>
  );
}

export default FinishMessage;
