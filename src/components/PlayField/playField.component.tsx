import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import colors from '../../styles/colors';
import { shuffleArray } from '../../utils/functions';
import GameCard, { CardProps } from './components/GameCard/gameCard.component';

import styles from './playField.styles';

const CARD_COLORS: string[] = [
  colors.color01,
  colors.color02,
  colors.color03,
  colors.color04,
  colors.color05,
  colors.color06,
];

type Props = {
  isPlaying: boolean;
  isFinished: boolean;
  onStart: () => void;
  onFinish: () => void;
};

function PlayField({ isPlaying, isFinished, onStart, onFinish }: Props) {
  const [touchCard, setTouchCard] = useState<string>('');
  const [flippedCards, setFlippedCards] = useState<any[]>([]);

  const cards: CardProps[] = useMemo(() => {
    let shuffledColors: { id: string; color: string }[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const currentColor of CARD_COLORS) {
      shuffledColors.push({ id: `${currentColor}-A`, color: currentColor });
      shuffledColors.push({ id: `${currentColor}-B`, color: currentColor });
    }

    shuffledColors = shuffleArray(shuffledColors);

    const result = shuffledColors.map(
      (item: { id: string; color: string }) => {
        return {
          cardID: item.id,
          isDisabled: !isPlaying,
          flipColor: item.color,
          isFlipped: false,
          onPress: () => {},
        };
      },
    );

    return result;
  }, [isPlaying]);

  const onPressCard = useCallback(
    (ID: string) => {
      if (ID === touchCard || flippedCards.includes(ID)) return;

      if (!touchCard) {
        setTouchCard(ID);
        setFlippedCards((prev: any) => [...prev, ID]);

        return;
      }

      if (
        touchCard.substring(0, touchCard.lastIndexOf('-')) ===
        ID.substring(0, ID.lastIndexOf('-'))
      ) {
        setFlippedCards((prev: any) => [...prev, ID]);
      } else {
        setFlippedCards((prev: any) => [...prev, ID]);

        setTimeout(() => {
          setFlippedCards((prev: any) => prev.filter((i: any) => i !== touchCard && i !== ID));
        }, 500);
      }

      setTouchCard('');
    },
    [touchCard, flippedCards],
  );

  const handleOnReset = useCallback(() => {
    setTouchCard('');
    setFlippedCards([]);

    onStart();
  }, [onStart]);

  useEffect(() => {
    if (flippedCards.length === cards.length) onFinish();
  }, [cards.length, flippedCards.length, onFinish]);

  return (
    <View style={styles.container}>
      {cards.map((props, index) => (
        <GameCard
          {...props}
          key={props.cardID}
          isFlipped={flippedCards.includes(props.cardID)}
          onPress={() => onPressCard(props.cardID)}
          {...(index === cards.length - 1
            ? { hasPlayButton: !isPlaying, onPlay: onStart }
            : {})}
        />
      ))}

      {isFinished && (
        <View style={styles.finishContainer}>
          <Text style={styles.finishTitle}>Wonderful!</Text>

          <Pressable onPress={handleOnReset}>
            <Text style={styles.resetButton}>NEW GAME</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default React.memo(PlayField);
