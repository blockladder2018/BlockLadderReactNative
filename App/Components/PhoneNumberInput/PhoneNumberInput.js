import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

import { Metrics } from 'App/Themes';
import Styles from './PhoneNumberInputStyles';
import CountryListConfig from 'App/Config/CountryListConfig.json';

const COUNTRY_LIST = ['CN', 'US', 'JP', 'KR', 'FR', 'SG', 'IN'];

class PhoneNumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = { cca2: 'cn', isValidNumber: false, value: '' };
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
    this.phone.focus();
  }

  onChangePhoneNumber(phoneNumber) {
    this.setState({ isValidNumber: this.phone.isValidNumber(), value: this.phone.getValue() });
  }

  render() {

    const {
      containerStyle,
      labelViewStyle,
      labelTextStyle,
    } = Styles;

    return (
      <View style={containerStyle}>
        <View style={labelViewStyle}>
          <Text style={labelTextStyle}>
            Mobile Number
          </Text>
        </View>

        <PhoneInput
          ref={(ref) => this.phone = ref }
          onPressFlag = {this.onPressFlag.bind(this)}
          onChangePhoneNumber = {this.onChangePhoneNumber.bind(this)}
          countriesList={require('../../Config/CountryListConfig.json')}
          initialCountry="cn"
          style={{ height: 50, width: Metrics.screenWidth * 0.9, borderWidth: 1, padding: 10 }}
          flagStyle={{ width: 50, height: 30 }}
          textStyle={{ fontSize: 20 }}
        />

      {this.state.isValidNumber ? <Text>Valid</Text> : <Text>Invalid</Text>}
      <Text>{this.state.value}</Text>

        <CountryPicker
          ref={(ref) => this.countryPicker = ref }
          countryList={COUNTRY_LIST}
          onChange={this.selectCountry.bind(this)}
          translation="eng"
          cca2={this.state.cca2}
        >
          <View />
        </CountryPicker>
      </View>
    );
  }
}

export default PhoneNumberInput;
