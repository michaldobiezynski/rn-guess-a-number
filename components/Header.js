import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Title from '../components/Title';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Title>{props.title}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
