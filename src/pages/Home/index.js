/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Clock from '../../components/Clock';
import Modal from '../../components/Modal';

export default function Home() {
  const [date, setDate] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;
  const startTime = () => {
    const countDownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  function handleInputDate(event) {
    setDate(event.target.value);
  }

  useEffect(() => {
    startTime();
  });

  return (
    <>
      {toggleModal && (
      <Modal closeModal={setToggleModal}>
        <Text>Colocar Data</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChange={handleInputDate}
        />
        <Text style={styles.title_input}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChange={handleInputDate}
        />
      </Modal>
      )}

      <View>
        <Text style={styles.title}>
          CountDown
        </Text>
        <Button
          onPress={() => setToggleModal(true)}
          title="Inserir Data"
          color="#03045e"
        />
      </View>

      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: '44px',
    color: '#222222',
  },
  input: {
    marginTop: 10,
    padding: 4,
    border: '2px solid #f8f9fa',
  },
  title_input: {
    marginTop: 10,
  },
});
