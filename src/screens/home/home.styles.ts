import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',

    paddingVertical: 45,
    paddingHorizontal: 30,
    backgroundColor: '#F2F2F2',
  },
  list: {
    gap: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#2C2C2C',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default styles;

/* Rectangle 15 */
