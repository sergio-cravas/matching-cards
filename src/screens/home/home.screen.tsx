import React from 'react';

import {Text, SafeAreaView, View} from 'react-native';
import styles from './home.styles';

const Card = () => {
  return <View style={styles.card} />;
};

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Matching Cards</Text>

      <View style={styles.list}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((card: number) => (
          <Card key={'Tarjeta ' + card} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Home;
