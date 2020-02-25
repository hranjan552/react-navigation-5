import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function SignupScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>SignUp Screen</Text>
      <View style={{ marginVertical: 20 }}></View>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('Login')}
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
