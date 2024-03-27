import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = ({ color }: { color?: string }) =>
  StyleSheet.create({
    card: {
      width: 70,
      height: 70,
      aspectRatio: 1,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 10,
      backgroundColor: colors.black,

      elevation: 4,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 4,
    },
    'card--flipped': {
      backgroundColor: color,
    },
  });

export default styles;

/* Rectangle 15 */
