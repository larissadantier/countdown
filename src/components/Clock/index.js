import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import calculationDays from '../../utils/calculationDays';

export default function Clock({ days }) {
  return (
    <View style={styles.containerNumbers}>
      <CountDown
        until={calculationDays(days)}
        digitStyle={{ backgroundColor: '#03045e' }}
        digitTxtStyle={{ color: '#FFF' }}
        size={40}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerNumbers: {
    marginTop: 16,
  },
});

Clock.propTypes = {
  days: PropTypes.string.isRequired,
};
