import React from 'react';
import { View } from 'react-native';

import styles from './gameCard.styles';

const GameCard = () => {
  return (
    <View style={styles.container} />
  );
};

export default React.memo(GameCard);
