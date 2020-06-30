import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

class Task extends Component {
  render() {
    return (
      <Text style={{textAlign: 'center', fontSize: 0.2}}>Too: this.props.text</Text>
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
            layoutOrigin: [0.5, 0.5]
          }}
        >

          <Text style={{textAlign: 'center', fontSize: 0.2}}>Too: Get groceries.</Text>
        </view>
      </View>
    )
  }
}

AppRegistry.registerComponent('Basics', () => Basics)