import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

class Task extends Component {
  render() {
    return (
      <Text style={{textAlign: 'center', fontSize: .2}}>Too: Get groceries.</Text>
    )
  }
}


export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <view
          style={{
            transform: [{translate: [0, 0, -3]}],
            layoutOrigin: [.5, .5]
          }}
        >
          <Task />
          <Task />
          <Task />
        </view>
      </View>
    )
  }
}

AppRegistry.registerComponent('Basics', () => Basics)