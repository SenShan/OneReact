import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';
export default class App extends Component<{}> {
  state = {
    url: 'https://www.apple.com',
    scalesPageToFit: true,
  };

  render() {
    return (
      <View style={Styles.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={Styles.webView}
          source={{
            uri: this.state.url,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate={'normal'}
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  }

  onNavigationStateChange = navState => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true,
    });
  };
  onShouldStartLoadWithRequest = event => {
    console.log('');
    return true;
  };
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },
  webView: {
    height: 350,
  },
});
