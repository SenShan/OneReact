import React, {Component} from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Image,
  FlatList,
  ProgressBarAndroid,
} from 'react-native';

const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default class NetWork_T extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {isLoading: false, isGetNet: false, json: '', listDatas: []};
  }

  getISok() {
    Alert.alert('获取成功');
    this.setState(prevState => ({
      isLoading: false,
    }));
  }

  getIsFail() {
    Alert.alert('获取失败');
  }

  setJson(json) {
    this.setState(prevState => ({
      json: json,
    }));
  }

  checkJson(myJson) {
    //{"Statu":1,"Msg":"","BackUrl":"","Data":{"engiTeamId":102,"engiTeam":"上海腾隆（集团）有限公司","groupId":2356,"groupName":"腾隆 排摸1","groupLoginName":"腾隆 排摸1","groupLoginPwd":"202CB962AC59075B964B07152D234B70","isReset":0}}
    var state = myJson.Statu;
    console.log(state);
    var datas = myJson.Data;
    var array = [];
    if (state == 1) {
      this.getISok();
    } else {
      this.getIsFail();
      return;
    }
    array.push({
      engiTeam: datas.engiTeam,
      groupLoginName: datas.groupLoginName,
      groupName: datas.groupName,
      groupLoginPwd: datas.groupLoginPwd,
      key: '1',
    });

    array.push({
      engiTeam: datas.engiTeam,
      groupLoginName: datas.groupLoginName,
      groupName: datas.groupName,
      groupLoginPwd: datas.groupLoginPwd,
      key: '2',
    });
    array.push({
      engiTeam: datas.engiTeam,
      groupLoginName: datas.groupLoginName,
      groupName: datas.groupName,
      groupLoginPwd: datas.groupLoginPwd,
      key: '3',
    });
    array.push({
      engiTeam: datas.engiTeam,
      groupLoginName: datas.groupLoginName,
      groupName: datas.groupName,
      groupLoginPwd: datas.groupLoginPwd,
      key: '4',
    });
    console.log('come hear1' + array.length);
    this.setState(
      prevState => ({
        listDatas: array,
      }),
      function() {
        console.log('come hear2' + this.state.listDatas.length);
        for (var i = 0; i < this.state.listDatas.length; i++) {
          console.log(
            this.state.listDatas[i].engiTeam +
              this.state.listDatas[i].groupLoginName +
              this.state.listDatas[i].groupName +
              this.state.listDatas[i].groupLoginPwd,
          );
        }
      },
    );
  }
  //将事件放在组件外部
  getRequest(url) {
    var opts = {
      method: 'GET',
    };
    fetch(url, opts)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setJson(JSON.stringify(myJson));
        console.log(JSON.stringify(myJson));
        this.checkJson(myJson);
      })
      .catch(error => {
        console.log(error);
      });
  }

  click() {
    this.setState(prevState => ({
      isLoading: true,
    }));

    this.getRequest(
      'http://:80/Interface/GetPCLoginInfoByMac?mac=08:62:66:d8:33:c5',
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="点击请求" onPress={this.click} />
        {this.state.isLoading ? <ProgressBarAndroid styleAttr="Large" /> : null}
        <Text style={{marginTop: 20, marginBottom: 20}}>
          {this.state.json}{' '}
        </Text>
        <View
          style={{height: 300, backgroundColor: 'white', width: ScreenWidth}}>
          <FlatList
            data={this.state.listDatas}
            renderItem={({item}) => (
              <View style={{height: 100}}>
                <Text style={{fontSize: 20}}>{item.engiTeam}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>名称：{item.groupLoginName}/</Text>
                  <Text>简介：{item.groupName}</Text>
                </View>
                <Text>{item.groupLoginPwd}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
