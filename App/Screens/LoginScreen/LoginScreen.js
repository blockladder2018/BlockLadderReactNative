import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark, ButtonEnableDisable, Input } from 'App/Components';
import LoginRedux from 'App/Redux/Login/LoginRedux';
import NavigationRedux from 'App/Redux/Navigation/NavigationRedux';

class LoginScreen extends Component {

  render() {
    const {
      country,
      mobile,
      password,
      invitationCode,
      verificationCode,
    } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Input
          label='Mobile Number'
          value={mobile}
          onChangeText={(text) => {
            this.props.setMobile(text);
            console.log('mobile number input');
          }}
          onSubmitEditing={() => console.log('submitted')}
        />

        <Input
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.props.setPassword(text);
            console.log('password input');
          }}
          onSubmitEditing={() => console.log('submitted')}
        />

        <ButtonEnableDisable
          disabled={_.isEmpty(mobile) || _.isEmpty(password)}
          title='Login'
          onPress={() => {
            console.log('Login button pressed, mobile: ' + mobile + '; password: ' + password);
            this.props.login();
          }}
        />

        <ButtonDark
          title='Register'
          onPress={() => {
            console.log('register button pressed');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    country: login.country,
    mobile: login.mobile,
    password: login.password,
    invitationCode: login.invitationCode,
    verificationCode: login.verificationCode,
    accessToken: login.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountry: (text) => {
      dispatch(LoginRedux.setCountry(text));
    },
    setMobile: (text) => {
      dispatch(LoginRedux.setMobile(text));
    },
    setPassword: (text) => {
      dispatch(LoginRedux.setPassword(text));
    },
    setInvitationCode: (text) => {
      dispatch(LoginRedux.setInvitationCode(text));
    },
    setVerificationCode: (text) => {
      dispatch(LoginRedux.setVerificationCode(text));
    },

    register: () => {
      return dispatch(LoginRedux.register());
    },
    sentSmsVerification: () => {
      return dispatch(LoginRedux.sentSmsVerification());
    },
    login: () => {
      //return dispatch(LoginRedux.login());
      return dispatch(NavigationRedux.login());
    },
    confirmSms: () => {
      return dispatch(LoginRedux.confirmSms());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
