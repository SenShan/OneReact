import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Student from './Student';
export default class StateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '路苏',
      size: 30,
    };
    this.stu = new Student('路名', '男', 12);
  }
  render(): React.ReactNode {
    return (
      <View>
        <Text
          style={{fontSize: this.state.size, backgroundColor: 'red'}}
          onPress={() => {
            this.setState({
              size: this.state.size + 1,
            });
          }}>
          name={this.state.name}
          {'\n'}
          age={this.state.size}
        </Text>
        <Text>{this.stu.getDescription()}</Text>
      </View>
    );
  }
}
