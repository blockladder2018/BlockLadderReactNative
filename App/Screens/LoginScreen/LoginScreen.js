import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

import { ButtonDark, ButtonEnableDisable, ButtonLink, Input, Spinner } from 'App/Components';
import { LoginController, NavigationController } from 'App/Controllers';
import CountryListConfig from 'App/Config/CountryListConfig.json';

const COUNTRY_LIST = ['CN', 'US', 'JP', 'KR', 'FR', 'SG', 'IN'];

class LoginScreen extends Component {

  constructor() {
    super();

    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = { cca2: 'cn' };
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }

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
        <PhoneInput
          ref={(ref) => this.phone = ref }
          onPressFlag = {this.onPressFlag}
          countriesList={require('../../Config/CountryListConfig.json')}
          initialCountry="cn"
        />

        <CountryPicker
          ref={(ref) => this.countryPicker = ref }
          countryList={COUNTRY_LIST}
          onChange={(value) => this.selectCountry(value)}
          translation="eng"
          cca2={this.state.cca2}
        >
          <View />
        </CountryPicker>

        <Input
          label='Username'
          placeholder='Mobile number'
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
