import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenHeading}>Home Screen</Text>
      <View style={{ marginVertical: 20 }}></View>
      <Button
        title="Go to Tab Stack"
        onPress={() => props.navigation.navigate('TabStack')}
      />
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
