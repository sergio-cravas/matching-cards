import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    flexWrap: 'wrap',

    gap: 16,
  },
  finishContainer: {
    position: 'absolute',

    width: '100%',
    height: '100%',

    paddingVertical: 30,

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.black,
    borderRadius: 10,

    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  finishTitle: {
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.background,
  },

  resetButton: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: colors.background,
  }
});

export default styles;

