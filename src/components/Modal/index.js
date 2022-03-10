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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
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
    padding: 8,
    marginTop: 16,
    backgroundColor: '#e63946',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
