'use strict';
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, AppRegistry} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <ScrollView style={{paddingTop: 30}}>
        <Text style={styles.label}>
          父容器默认情况下(flexDirection:'column')子元素从上到下垂直排列，此时子元素默认水平方向填充父容器;子元素flex:1,在垂直方向起作用，表示垂直方向占满父容器空间
        </Text>
        <View style={[styles.container, {height: 80}]}>
          <View style={{backgroundColor: 'red', flex: 1}} />
          <View style={{height: 20, backgroundColor: 'green'}} />
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'row'时子元素从左到右水平排列;flex:1在水平方向起作用，表示水平方向占满全部父容器空间
        </Text>
        <View style={[{height: 60, flexDirection: 'row'}, styles.container]}>
          <View style={{height: 20, flex: 1, backgroundColor: 'red'}} />
          <View style={{height: 20, width: 100, backgroundColor: 'green'}} />
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'column'，只有一个子元素;子元素flex:1,占满全部父容器空间，子元素height不起作用
        </Text>
        <View
          style={[{height: 100, flexDirection: 'column'}, styles.container]}>
          <View style={{flex: 1, backgroundColor: 'red', height: 10}} />
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'row'，只有一个子元素;子元素flex:1,占满全部父容器空间,子元素width不起作用
        </Text>
        <View style={[{height: 100, flexDirection: 'row'}, styles.container]}>
          <View style={{flex: 1, backgroundColor: 'red', width: 10}} />
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'row'，子元素在水平方向按比例分配父容器空间
        </Text>
        <View style={[{height: 40, flexDirection: 'row'}, styles.container]}>
          <View style={{flex: 1, backgroundColor: 'red', height: 20}} />
          <View style={{flex: 2, backgroundColor: 'green', height: 20}} />
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'column'，子元素在垂直方向按比例分配父容器空间
        </Text>
        <View
          style={[{height: 100, flexDirection: 'column'}, styles.container]}>
          <View style={{flex: 1, backgroundColor: 'red', width: 20}} />
          <View style={{flex: 1, backgroundColor: 'green', width: 20}} />
        </View>

        <Text style={styles.label}>
          默认情况下父容器flexDirection:'column'，子元素从上到下垂直排列
        </Text>
        <View style={[{}, styles.container]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'column'，子元素从左到右水平排列
        </Text>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          父容器flexDirection:'column'，子元素从上到下垂直排列，与默认情况父容器不设置flexDirection相同
        </Text>
        <View style={[{flexDirection: 'column'}, styles.container]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#333333'}}>
            子元素元素水平排列
          </Text>
        </View>

        <Text style={styles.label}>
          水平方向左对齐，justifyContent:'flex-start'
        </Text>
        <View
          style={[
            {flexDirection: 'row', justifyContent: 'flex-start'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          水平方向居中对齐，justifyContent:'center'
        </Text>
        <View
          style={[
            {flexDirection: 'row', justifyContent: 'center'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          水平方向右对齐，justifyContent:'flex-end'
        </Text>
        <View
          style={[
            {flexDirection: 'row', justifyContent: 'flex-end'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          水平方向元素之间间隔相同，justifyContent:'space-between'
        </Text>
        <View
          style={[
            {flexDirection: 'row', justifyContent: 'space-between'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          水平方向元素两边间隔相同，justifyContent:'space-around'
        </Text>
        <View
          style={[
            {flexDirection: 'row', justifyContent: 'space-around'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向上对齐，alignItems:'flex-start'
        </Text>
        <View
          style={[
            {flexDirection: 'row', height: 50, alignItems: 'flex-start'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>垂直方向居中对齐，alignItems:'center'</Text>
        <View
          style={[
            {flexDirection: 'row', height: 50, alignItems: 'center'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>垂直方下对齐，alignItems:'flex-end'</Text>
        <View
          style={[
            {flexDirection: 'row', height: 50, alignItems: 'flex-end'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#333333'}}>
            子元素元素垂直排列
          </Text>
        </View>

        <Text style={styles.label}>
          水平方向左对齐，alignItems:'flex-start'
        </Text>
        <View
          style={[
            {flexDirection: 'column', alignItems: 'flex-start'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>水平方向居中对齐，alignItems:'center'</Text>
        <View
          style={[
            {flexDirection: 'column', alignItems: 'center'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>水平方向右对齐，alignItems:'flex-end'</Text>
        <View
          style={[
            {flexDirection: 'column', alignItems: 'flex-end'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向上对齐，justifyContent:'flex-start'
        </Text>
        <View
          style={[
            {
              flexDirection: 'column',
              height: 100,
              justifyContent: 'flex-start',
            },
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向居中对齐，justifyContent:'center'
        </Text>
        <View
          style={[
            {flexDirection: 'column', height: 100, justifyContent: 'center'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向下对齐，justifyContent:'flex-end'
        </Text>
        <View
          style={[
            {flexDirection: 'column', height: 100, justifyContent: 'flex-end'},
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向元素之间间隔相同，justifyContent:'space-between'
        </Text>
        <View
          style={[
            {
              flexDirection: 'column',
              height: 100,
              justifyContent: 'space-between',
            },
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <Text style={styles.label}>
          垂直方向元素两边间隔相同，justifyContent:'space-around'
        </Text>
        <View
          style={[
            {
              flexDirection: 'column',
              height: 100,
              justifyContent: 'space-around',
            },
            styles.container,
          ]}>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#333333'}}>
            父容器设置flexWrap:'wrap'表明包裹内容，子元素超出父容器显示范围折行显示，默认情况不设置flexWrap就包裹内容
          </Text>
        </View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#333333'}}>
            父容器设置flexWrap:'nowrap'表明不包裹内容，子元素超出父容器部分不被显示，默认情况不设置flexWrap就包裹内容
          </Text>
        </View>
        <View style={{flexWrap: 'nowrap', flexDirection: 'row'}}>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
          <Text>测试</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#333333'}}>绝对位置</Text>
        </View>
        <View style={{height: 116, borderWidth: 1, margin: 5}}>
          <Text style={{fontSize: 16, position: 'absolute', left: 20, top: 50}}>
            局对垂直居中
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  label: {
    color: '#333333',
    margin: 5,
  },
});

// AppRegistry.registerComponent('Demo', () => Demo);
