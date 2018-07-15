import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';

class NewsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <View>
          <Text>This is the News Screen</Text>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
