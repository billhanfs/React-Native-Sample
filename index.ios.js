/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

import MyScene from './MyScene';

class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('YoDawgApp', () => YoDawgApp);
