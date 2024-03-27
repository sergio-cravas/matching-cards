import React from 'react';
import { Pressable } from 'react-native';

import styles from './chip.styles';

type Props = {
  color: string;
  isFlipped: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
};

function Chip({ color, isFlipped, isDisabled, children, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles({}).card,
        isFlipped && styles({ color })['card--flipped'],
      ]}>
      {children}
    </Pressable>
  );
}

Chip.defaultProps = {
  children: undefined,
  isDisabled: false,
  onPress: undefined,
};

export default Chip;
