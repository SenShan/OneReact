import React, {Component} from 'react';
import {
  AppRegistry,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
const background = require('./image/login_bg.jpg');
const backIcon = require('./image/back.png');
const personIcon = require('./image/head.png');
const lockIcon = require('./image/lock.png');
const emailIcon = require('./image/email.png');
const birthdayIcon = require('./image/birthday.png');
import login from './style/loginStyle';
export default class SignupView extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={[styles.container, login.bg]}
        resizeMode="cover">
        <View style={styles.headerContainer}>
          <View style={styles.headerIconView}>
            <TouchableOpacity
              onPress={this.back.bind(this)}
              style={styles.headerBackButtonView}>
              <Image
                source={backIcon}
                style={styles.backButtonIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>注册</Text>
          </View>
        </View>

        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={personIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="用户名" //占位提示文字
              placeholderTextColor="#FFF" //占位提示文字的颜色
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={emailIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="邮箱"
              placeholderTextColor="#fff"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={lockIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              secureTextEntry={true}
              style={[styles.input, styles.whiteFont]}
              placeholder="密码"
              placeholderTextColor="#FFF"
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableHighlight onPress={this.login.bind(this)}>
            <View style={styles.signup}>
              <Text style={styles.whiteFont}>注册</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity>
            <View style={styles.signin}>
              <Text style={styles.greyFont}>
                已有账号? <Text style={styles.whiteFont}>登录</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  login() {
    console.log('开始模拟登录...');
  }
  back() {
    alert('返回');
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1,
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25,
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8',
  },
  whiteFont: {
    color: '#fff',
  },
});
