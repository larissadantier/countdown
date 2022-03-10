import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import calculationDays from '../../utils/calculationDays';

export default function Clock({ item }) {
  return (
    <View style={styles.containerNumbers}>
      <CountDown
        until={calculationDays(item.days)}
        digitStyle={{ backgroundColor: '#03045e' }}
        digitTxtStyle={{ color: '#FFF' }}
        size={40}
      />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNumbers: {
    marginTop: 16,
  },
  description: {
    fontSize: 18,
    marginTop: 8,
  },
});

Clock.propTypes = {
  item: PropTypes.string.isRequired,
};
