import React, { useCallback, useState } from 'react';
import { Pressable } from 'react-native';

import styles from './chip.styles';

type Props = {
  color: string;
  defaultFlipped?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
};

function Chip({
  color,
  defaultFlipped = false,
  isDisabled,
  children,
  onPress,
}: Props) {
  const [isFlipped, setIsFlipped] = useState<boolean>(defaultFlipped);

  const handleOnPress = useCallback(() => {
    setIsFlipped(true);
    if (onPress) onPress();
  }, [onPress]);

  return (
    <Pressable
      onPress={handleOnPress}
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
  defaultFlipped: false,
  onPress: undefined,
};

export default Chip;
