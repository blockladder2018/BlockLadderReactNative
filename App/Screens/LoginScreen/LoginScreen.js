import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark, ButtonEnableDisable, ButtonLink, Input, Spinner, PhoneNumberInput } from 'App/Components';
import { LoginController, NavigationController } from 'App/Controllers';

class LoginScreen extends Component {

  render() {
    const {
      mobileNumber,
      password,
      verificationCode,
      isLogging,
      errorMessage,
    } = this.props;

    if (isLogging) {
      return <Spinner />
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>

        <PhoneNumberInput />

        <Input
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => LoginController.setPassword(text)}
          onSubmitEditing={() => console.log('submitted')}
        />

        <View style={{ marginTop: 30 }}>
          <ButtonEnableDisable
            disabled={_.isEmpty(mobileNumber) || _.isEmpty(password)}
            title='Login'
            onPress={() => {
              LoginController.login().then(() => {
                NavigationController.navigateToAfterLogin();
              }).catch(() => {
                console.log('Login failed!')
              });
            }}
          />

          <ButtonDark
            title='Register'
            onPress={() => {
              console.log('Register button pressed');
              this.props.navigator.showModal({
                screen: 'BlockLadderReactNative.RegisterScreen',
                title: 'Register',
                passProps: {},
                navigatorStyle: {},
                animationType: 'slide-up',
              })
            }}
          />

          <ButtonLink
            title='Forgot your password'
            onPress={() => {
              console.log('Forgot your password pressed');
              this.props.navigator.showModal({
                screen: 'BlockLadderReactNative.ResetPasswordScreen',
                title: 'Reset Password',
                passProps: {},
                navigatorStyle: {},
                animationType: 'slide-up',
              })
            }}
          />

          <View>
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
    mobileNumber: login.mobileNumber,
    password: login.password,
    verificationCode: login.verificationCode,
    token: login.token,
    user: login.user,
    isLogging: login.isLogging,
    errorMessage: login.errorMessage,
  };
};

export default connect(mapStateToProps)(LoginScreen);
