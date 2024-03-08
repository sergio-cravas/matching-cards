import React from 'react';

import { Pressable } from 'react-native';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './gameCard.styles';

type Props = {
  cardID: string;
  flipColor: string;
  isFlipped: boolean;
  isDisabled?: boolean;
  hasPlayButton?: boolean;
  onPlay?: () => void;
  onPress: () => void;
}

const GameCard = ({ flipColor, isFlipped, isDisabled, hasPlayButton, onPlay, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} disabled={isDisabled} style={[styles({}).card, isFlipped && styles({ flipColor })['card--flipped']]}>
      {hasPlayButton && onPlay && <Pressable onPress={onPlay}><FontAwesomeIcon icon={faPlay} size={32} color='white' /></Pressable>}
    </Pressable>
  );
};

export default React.memo(GameCard);
export { Props as CardProps }
