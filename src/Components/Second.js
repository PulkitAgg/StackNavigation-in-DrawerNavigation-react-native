/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Header from './Header'


export default class Second extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} headerHeading="Second Page" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to Second Page
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});