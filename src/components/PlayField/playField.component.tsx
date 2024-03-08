import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import colors from '../../styles/colors';
import GameCard, { CardProps } from './components/GameCard/gameCard.component';

import styles from './playField.styles';
import { shuffleArray } from '../../utils/functions';

const CARD_COLORS: string[] = [colors.color01, colors.color02, colors.color03, colors.color04, colors.color05, colors.color06];

type Props = {
  onStart: () => void;
  onFinish: () => void;
}

const PlayField = ({ onStart, onFinish }: Props) => {
  const [touchCard, setTouchCard] = useState<string>('');
  const [flippedCards, setFlippedCards] = useState<any[]>([]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const cards: CardProps[] = useMemo(() => {
    let shuffledColors: { id: string, color: string }[] = [];

    for (const currentColor of CARD_COLORS) {
      shuffledColors.push({ id: currentColor + '-A', color: currentColor });
      shuffledColors.push({ id: currentColor + '-B', color: currentColor });
    }

    shuffledColors = shuffleArray(shuffledColors);

    let result: CardProps[] = shuffledColors.map((item) => {
      return {
        cardID: item.id,
        isDisabled: !isPlaying,
        flipColor: item.color,
        isFlipped: false,
        onPress: () => { },
      };
    });

    return result;
  }, [isPlaying]);

  const onPressCard = useCallback((ID: string) => {
    if (ID === touchCard || flippedCards.includes(ID)) return;


    if (!touchCard) {
      setTouchCard(ID);
      setFlippedCards(prev => [...prev, ID]);

      return;
    }

    if (touchCard.substring(0, touchCard.lastIndexOf("-")) === ID.substring(0, ID.lastIndexOf("-"))) {
      setFlippedCards(prev => [...prev, ID]);
    } else {
      setFlippedCards(prev => [...prev, ID]);

      setTimeout(() => {
        setFlippedCards(prev => prev.filter(i => i !== touchCard && i !== ID));
      }, 500);
    }

    setTouchCard('');
  }, [touchCard, flippedCards]);

  const handleOnStart = useCallback(() => {
    setIsPlaying(true);

    onStart();
  }, [onStart]);

  const handleOnFinish = useCallback(() => {
    setIsFinished(true);
    setIsPlaying(false);

    onFinish();
  }, [onFinish]);

  const handleOnReset = useCallback(() => {
    setTouchCard('');
    setFlippedCards([]);
    setIsFinished(false);

    handleOnStart();
  }, []);

  useEffect(() => {
    if (flippedCards.length === cards.length) handleOnFinish();
  }, [cards.length, flippedCards.length, handleOnFinish]);

  return (
    <View style={styles.container}>
      {cards.map((props, index) => (
        <GameCard
          {...props}
          key={props.cardID}
          isFlipped={flippedCards.includes(props.cardID)}
          onPress={() => onPressCard(props.cardID)}
          {...(index === cards.length - 1
            ? { hasPlayButton: !isPlaying, onPlay: handleOnStart }
            : {}
          )}
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
};

export default React.memo(PlayField);
