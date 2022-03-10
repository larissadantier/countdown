/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Clock from '../../components/Clock';
import Modal from '../../components/Modal';

export default function Home() {
  const [days, setDays] = useState(0);
  const [description, setDescription] = useState('');
  const [listDays, setListDays] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  console.log(days);
  console.log(description);
  console.log(listDays);

  function handleAddCountDownDays() {
    listDays.push({ id: listDays.length + 1, days, description });
    setListDays(listDays);
    setToggleModal(false);
    setDays('');
  }

  function handleInputDays(text) {
    setDays(text);
  }

  function handleInputDescription(text) {
    setDescription(text);
  }

  return (
    <>
      {toggleModal && (
      <Modal closeModal={setToggleModal}>
        <Text>Insira os dias</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={Number(days)}
          onChangeText={handleInputDays}
        />
        <Text style={styles.title_input}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={handleInputDescription}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddCountDownDays}
        >
          <Text style={styles.text}>Confirmar</Text>
        </TouchableOpacity>
      </Modal>
      )}

      <View>
        <Text style={styles.title}>
          CountDown
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setToggleModal(true)}
      >
        <Text style={styles.text}>Adicionar</Text>
      </TouchableOpacity>
      <ScrollView>
        {listDays.map((listDay) => (
          <Clock
            key={listDay.id}
            item={listDay}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 44,
    color: '#222222',
  },
  input: {
    marginTop: 10,
    padding: 4,
    borderWidth: 3,
    borderColor: '#f8f9fa',
    borderRadius: 4,
  },
  title_input: {
    marginTop: 10,
  },
  button: {
    maxWidth: 100,
    alignItems: 'center',
    padding: 8,
    marginTop: 16,
    backgroundColor: '#03045e',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
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
