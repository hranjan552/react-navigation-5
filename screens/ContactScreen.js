import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ContactScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>Contact Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenHeading: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
