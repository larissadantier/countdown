import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function Clock({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) {
  return (
    <View style={styles.containerNumbers}>
      <View style={styles.item}>
        <Text style={styles.item_text}>{timerDays}</Text>
        <Text style={styles.small}>Days</Text>
      </View>
      <Text style={styles.item_text}>:</Text>
      <View style={styles.item}>
        <Text style={styles.item_text}>{timerHours}</Text>
        <Text style={styles.small}>Hours</Text>
      </View>
      <Text style={styles.item_text}>:</Text>
      <View style={styles.item}>

        <Text style={styles.item_text}>{timerMinutes}</Text>
        <Text style={styles.small}>Minutes</Text>
      </View>
      <Text style={styles.item_text}>:</Text>
      <View style={styles.item}>

        <Text style={styles.item_text}>{timerSeconds}</Text>
        <Text style={styles.small}>Seconds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNumbers: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#03045e',
    borderRadius: 4,
  },
  item: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
  },
  item_text: {
    fontSize: 44,
    color: '#fff',
  },
  small: {
    fontSize: 16,
    color: '#fff',
  },
});

Clock.propTypes = {
  timerDays: PropTypes.number.isRequired,
  timerHours: PropTypes.number.isRequired,
  timerMinutes: PropTypes.number.isRequired,
  timerSeconds: PropTypes.number.isRequired,
};
