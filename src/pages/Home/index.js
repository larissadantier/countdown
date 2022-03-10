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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listDays, setListDays] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  function handleAddCountDownDays() {
    listDays.push({
      id: listDays.length + 1,
      days,
      title,
      description,
    });
    setListDays(listDays);
    setToggleModal(false);
    cleanInputs();
  }

  function cleanInputs() {
    setDays('');
    setTitle('');
    setDescription('');
  }

  function handleRemoveCountDownDays(id) {
    const filterListDays = listDays.filter((item) => item.id !== id);
    setListDays(filterListDays);
  }

  function handleInputDays(text) {
    setDays(text);
  }

  function handleInputDescription(text) {
    setDescription(text);
  }

  function handleInputTitle(text) {
    setTitle(text);
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
        <Text style={styles.title_input}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleInputTitle}
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

      <View style={styles.header}>
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
            handleRemoveCountDownDays={() => handleRemoveCountDownDays(listDay.id)}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 28,
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
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#222222',
  },
  title_input: {
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginTop: 10,
    padding: 4,
    borderColor: '#f8f9fa',
    borderWidth: 3,
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
  button: {
    maxWidth: 100,
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#03045e',
    borderRadius: 4,
  },
});
