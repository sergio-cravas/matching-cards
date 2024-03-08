import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    'record-time': {
        fontSize: 15,
        color: colors.primary,
    },
    'current-timer': {
        fontSize: 25,
        color: colors.black,
    }
});

export default styles;

