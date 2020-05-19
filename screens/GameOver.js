import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import Title from '../components/Title';
import Colors from '../constants/colors';

const GameOver = (props) => {
  let gameOverPicture = require('../assets/original.png');

  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          resizeMode='cover'
          style={styles.image}
          source={gameOverPicture}
          // source={{
          //   uri: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01qtgbf.jpg',
          // }}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <Button title='NEW GAME' onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginHorizontal: 40,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOver;
