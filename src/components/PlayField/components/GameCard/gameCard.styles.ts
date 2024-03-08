import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';

const styles = ({ flipColor } : { flipColor?: string }) => StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    aspectRatio: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    backgroundColor: colors.black,

    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  "card--flipped": {
    backgroundColor: flipColor
  }
});

export default styles;

/* Rectangle 15 */
