import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function LoginScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>Login Screen</Text>
      <View style={{ marginVertical: 20 }}></View>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('HomeNav')}
      />
      <View style={{ marginVertical: 20 }}></View>
      <Button
        title="Go to SignUp"
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
  screenHeading: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
