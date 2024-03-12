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

    justifyContent: 'space-between',
  },
  playContainer: {
    display: 'flex',
    gap: 16,
  },
});

export default styles;

/* Rectangle 15 */
