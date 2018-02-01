/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Header from './Header'
export default class App extends Component<{}> {

  openDrawer() {
    this.props.navigation.navigate('DrawerToggle');
  }

  buttonPress() {
    this.props.navigation.navigate('StackScreen');
  }

  render() {
    return (

      <View style={styles.container}>
        <Header navigation={this.props.navigation} headerHeading="Home Page" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to Home Page
          </Text>
          <TouchableOpacity  style={styles.button}>
          <Button 
          title="Go to next Screen" 
          color="#7490bc"
          onPress={this.buttonPress.bind(this)} 
          />
          </TouchableOpacity>
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
  },
  button:{
    width:Dimensions.get('window').width/2,
    alignSelf : 'center'
  }
});
