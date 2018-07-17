import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark, ButtonEnableDisable, Input, Spinner } from 'App/Components';
import { LoginController, NavigationController } from 'App/Controllers';

class LoginScreen extends Component {

  render() {
    const {
      country,
      username,
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
        <Input
          label='Username'
          value={username}
          onChangeText={(text) => LoginController.setUsername(text)}
          onSubmitEditing={() => console.log('Username entered')}
        />

        <Input
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => LoginController.setPassword(text)}
          onSubmitEditing={() => console.log('submitted')}
        />

        <View style={{ marginTop: 30 }}>
          <ButtonEnableDisable
            disabled={_.isEmpty(username) || _.isEmpty(password)}
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
    country: login.country,
    username: login.username,
    password: login.password,
    verificationCode: login.verificationCode,
    token: login.token,
    user: login.user,
    isLogging: login.isLogging,
    errorMessage: login.errorMessage,
  };
};

export default connect(mapStateToProps)(LoginScreen);
