import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Modal({ children, closeModal }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        {children}
        <TouchableOpacity
          style={styles.button}
          onPress={() => closeModal()}
        >
          <Text style={styles.text}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    width: '100%',
    maxWidth: 340,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  button: {
    maxWidth: 60,
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#e63946',
    borderRadius: 4,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
