import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  'first-title': {
    color: colors.white,
    fontSize: 25,
    fontWeight: '300',
    fontFamily: 'Montserrat-Light',
  },
  'second-title': {
    color: colors.white,
    fontSize: 25,
    letterSpacing: 9.5,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
  },
});

export default styles;
