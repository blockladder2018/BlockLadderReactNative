import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark, ButtonEnableDisable, Input } from 'App/Components';
import { LoginController } from 'App/Controllers';

class ResetPasswordScreen extends Component {

  state = {
    confirmPassword: '',
  };

  render() {
    const {
      country,
      username,
      password,
      verificationCode,
      visibleMessage,
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
          label='Username'
          placeholder='Mobile number'
          value={username}
          onChangeText={(text) => LoginController.setUsername(text)}
          onSubmitEditing={() => console.log('username entered')}
        />

        <Input
          label='New password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => LoginController.setPassword(text)}
          onSubmitEditing={() => console.log('New password entered')}
        />

        <Input
          label='Confirm new password'
          value={this.state.confirmPassword}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ confirmPassword: text })}
          onSubmitEditing={() => console.log('confirmPassword entered')}
        />

        <Input
          label='Verification code'
          value={verificationCode}
          onChangeText={(text) => LoginController.setVerificationCode(text)}
          onSubmitEditing={() => console.log('verificationCode entered')}
        />

        <View style={{ marginTop: 30 }}>
          <ButtonEnableDisable
            disabled={_.isEmpty(username)}
            title='Send Verification Code'
            onPress={() => {
              console.log('Send Verification Code button pressed');
              LoginController.sendVerify().then(() => {
                console.log('Send verification code succedded!');
              }).catch(() => {
                console.log('Send verification code failed!');
              });
            }}
          />

          <ButtonEnableDisable
            disabled={_.isEmpty(country) || _.isEmpty(username) || _.isEmpty(password) || _.isEmpty(verificationCode) || password !== this.state.confirmPassword}
            title='Reset Password'
            onPress={() => {
              console.log('Edit password');
              LoginController.editPassword().then(() => {
                console.log('Edit password successfully!');
                this.props.navigator.dismissModal({ animationType: 'slide-down' });
                LoginControler.clear();
              }).catch(() => {
                console.log('Edit password failed!');
              });
            }}
          />

          <ButtonDark
            title='Cancel'
            onPress={() => {
              console.log('Cancel button pressed');
              this.props.navigator.dismissModal({ animationType: 'slide-down' });
              LoginController.clear();
            }}
          />

          <View>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
              {visibleMessage}
            </Text>
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>
              {errorMessage}
            </Text>
          </View>
        </View>
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
    visibleMessage: login.visibleMessage,
    errorMessage: login.errorMessage,
  };
};

export default connect(mapStateToProps)(ResetPasswordScreen);
