import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>Profile Screen</Text>
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
