import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import calculationDays from '../../utils/calculationDays';

export default function Clock({ item, handleRemoveCountDownDays }) {
  return (
    <View style={styles.containerNumbers}>
      <CountDown
        until={calculationDays(item.days)}
        digitStyle={{ backgroundColor: '#03045e' }}
        digitTxtStyle={{ color: '#FFF' }}
        size={40}
      />
      <Text style={styles.description}>
        Titulo:
        {' '}
        {item.title}
      </Text>
      <Text style={styles.description}>
        Descrição:
        {' '}
        {item.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRemoveCountDownDays(item.id)}
      >
        <Text style={styles.text}>Remover</Text>
      </TouchableOpacity>
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
  button: {
    maxWidth: 100,
    alignItems: 'center',
    padding: 8,
    marginTop: 16,
    backgroundColor: '#e03045',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

Clock.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    days: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveCountDownDays: PropTypes.func.isRequired,
};
