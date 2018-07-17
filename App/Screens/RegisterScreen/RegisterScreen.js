import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark, ButtonEnableDisable, Input } from 'App/Components';
import { LoginController } from 'App/Controllers';

class RegisterScreen extends Component {

  render() {
    const {
      country,
      username,
      password,
      verificationCode,
      errorMessage,
    } = this.props;

    return (
      <View style={{ alignItems: 'center' }}>
        <Input
          label='Country'
          value={country}
          onChangeText={(text) => LoginController.setCountry(text)}
          onSubmitEditing={() => console.log('country entered')}
        />

        <Input
          label='User name'
          value={username}
          onChangeText={(text) => LoginController.setUsername(text)}
          onSubmitEditing={() => console.log('username entered')}
        />

        <Input
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => LoginController.setPassword(text)}
          onSubmitEditing={() => console.log('password entered')}
        />

        <Input
          label='Verification code'
          value={verificationCode}
          onChangeText={(text) => LoginController.setVerificationCode(text)}
          onSubmitEditing={() => console.log('verificationCode entered')}
        />

        <ButtonEnableDisable
          disabled={_.isEmpty(country) || _.isEmpty(username) || _.isEmpty(password) || _.isEmpty(verificationCode)}
          title='Submit'
          onPress={() => {
            console.log('Register new account');
          }}
        />

        <ButtonDark
          title='Cancel'
          onPress={() => {
            console.log('Cancel button pressed');
            this.props.navigator.dismissModal({
              animationType: 'slide-down',
            })
          }}
        />

      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    country: login.country,
    username: login.username,
    password: login.password,
    verificationCode: login.verificationCode,
    errorMessage: login.errorMessage,
  };
};

export default connect(mapStateToProps)(RegisterScreen);
