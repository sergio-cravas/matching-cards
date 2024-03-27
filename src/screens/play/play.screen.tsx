import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Chip from '../../ui/Chip/chip.component';
import Background from '../../ui/Background/background.component';

import styles from './play.styles';

function StartView({ onStart }: any): React.JSX.Element {
  const handleOnStart = useCallback(() => {
    onStart();
  }, [onStart]);

  return (
    <View style={styles.container}>
      <View style={styles.playContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Chip color="#8F93FF" />

          <Chip color="#8F93FF" />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Chip color="#A0FFA9" defaultFlipped onPress={handleOnStart}>
            <FontAwesomeIcon
              icon={faPlay}
              size={32}
              color="black"
              style={{ transform: [{ rotateZ: '45deg' }] }}
            />
          </Chip>

          <Chip color="#8F93FF" />
        </View>
      </View>
    </View>
  );
}

function GameView({ onFinish }: any): React.JSX.Element {
  const handleOnFinish = useCallback(() => {
    onFinish();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.playContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <View style={{ width: 70, height: 70 }} />
          <View style={{ width: 70, height: 70 }} />
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <View style={{ width: 70, height: 70 }} />
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
          <View style={{ width: 70, height: 70 }} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Chip color="#8F93FF" />
          <Chip color="#8F93FF" />
          <View style={{ width: 70, height: 70 }} />
          <View style={{ width: 70, height: 70 }} />
        </View>
      </View>
    </View>
  );
}

function Play(): React.JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#606080' }}>
      <Background>
        {!isPlaying && <StartView onStart={() => setIsPlaying(true)} />}

        {isPlaying && <GameView onFinish={() => setIsPlaying(false)} />}
      </Background>
    </SafeAreaView>
  );
}

export default Play;