import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {
  Defs, Rect, LinearGradient, Stop,
} from 'react-native-svg';

function Background({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor="#606080" />
            <Stop offset="0.5" stopColor="#8D7DCA" />
            <Stop offset="1" stopColor="#464646" />
          </LinearGradient>
        </Defs>

        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      {children}
    </View>
  );
}

export default Background;
