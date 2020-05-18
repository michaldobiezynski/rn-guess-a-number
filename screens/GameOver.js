import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import Title from '../components/Title';

const GameOver = (props) => {
  let gameOverPicture = require('../assets/original.png');

  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <Image resizeMode='cover' style={styles.image} source={gameOverPicture} />
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title='NEW GAME' onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
  },
});

export default GameOver;
