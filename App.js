import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>GabrielD_O</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri:'https://github.com/gabrieldanuz.png'
          }}></Image>
      </View>
      <View>
        <Image
          style={{
            width: '100%',
            height: 350,
          }}
          source={{
            uri:'https://github.com/gabrieldanuz.png'
          }}></Image>
      </View>
      <View>
        <Text>Like</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
