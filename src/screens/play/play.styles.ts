import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 45,
    paddingHorizontal: 30,

    justifyContent: 'center',
  },
  playContainer: {
    display: 'flex',

    alignItems: 'center',

    gap: 8,

    transform: 'rotateZ(-45deg)',
  },
});

export default styles;

/* Rectangle 15 */
