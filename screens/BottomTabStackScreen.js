import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function BottomTabStackScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>Bottom tabs Stack Screen</Text>
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
