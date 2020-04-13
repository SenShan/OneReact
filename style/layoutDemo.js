import React, {Component} from 'react';
import {RPermissionsAndroid, ListView, View, Text} from 'react-native';

export default class layoutDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //flexDirection:为column 子View纵向排序  使用alignItems
    //flexDirection:为row 子View横向排序  使用justifyContent
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#FF4500',
            margin: 5,
            flexWrap: 'nowrap',
          }}>
          <Text style={{fontSize: 16}}>1红红红红 </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#98FB98',
            margin: 5,
          }}>
          <Text
            style={{
              borderWidth: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              fontSize: 16,
              backgroundColor: '#EE6A50',
            }}>
            2绿
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#7B68EE',
            margin: 5,
          }}>
          <Text style={{fontSize: 16}}>3蓝 </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#EEC900',
            margin: 5,
          }}>
          <Text style={{fontSize: 16}}>4黄 </Text>
        </View>
      </View>
    );
  }
}
