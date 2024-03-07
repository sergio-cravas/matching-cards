import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: colors.black,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default styles;

/* Rectangle 15 */
