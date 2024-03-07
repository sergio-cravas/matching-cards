import React from 'react';
import { View } from 'react-native';

import GameCard from './components/GameCard/gameCard.component';

import styles from './playField.styles';

const PlayField = () => {
  const total = 12;

  return (
    <View style={styles.container}>
      {[...Array(total).keys()].map((card: number) => (
        <GameCard key={'Tarjeta ' + card} />
      ))}
    </View>
  );
};

export default React.memo(PlayField);
