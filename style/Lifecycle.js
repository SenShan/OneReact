import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('—————————constructor—————————');
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log('—————————componentWillMount—————————');
  }

  componentDidMount() {
    console.log('—————————componentDidMount—————————');
  }

  componentWillReceiveProps(nextProps) {
    console.log('—————————componentWillReceiveProps—————————');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('—————————shouldComponentUpdate—————————');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('—————————componentWillUpdate—————————');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('—————————componentDidUpdate—————————');
  }
  componentWillUnmount(): void {
    console.log('—————————componentWillUnmount—————————');
  }

  render() {
    console.log('—————————render—————————');
    return (
      <View>
        <Text
          style={{fontsize: 20, backgroundColor: '#414A8C'}}
          onPress={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Hello{this.props.name}
        </Text>
        <Text style={{fontSize: 40}}>{this.state.count}</Text>
      </View>
    );
  }
}
