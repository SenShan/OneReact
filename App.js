/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Lifecycle from './style/Lifecycle';
const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
export default class App extends Component<{}> {
  state = {
    selectedTab: 'home',
  };
  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Lifecycle name="小麦" />
      </View>
    );
  };

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/home_gray.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/home.png')}
            />
          )}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          {this._renderContent('#414A8C', '首页')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="个人中心"
          renderIcon={() => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/home_gray.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/home.png')}
            />
          )}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'profile'})}>
          {this._renderContent('#783E33', '个人中心')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
