import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOver;
