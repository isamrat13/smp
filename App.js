import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackComponents from './config/router';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackComponents />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
