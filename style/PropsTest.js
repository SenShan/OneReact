import React, {Component, PropsTypes} from 'react';
import {View, Text} from 'react-native';
export default class PropsTest extends Component {
  static defaultProps = {names: '小鸣'};

  static propTypes = {
    names: PropsTypes.string,
    age: 16,
  };
  render() {
    //在这里我们使用props中的name属性     props不可改变是指渲染之后不可改变
    return <Text>{this.props.names}</Text>;
  }
}
