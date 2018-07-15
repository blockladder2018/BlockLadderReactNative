import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Metrics } from 'App/Themes';
import Styles from './InputStyles';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { isOnFocus: false };
  }

  onFocus() {
    this.setState({ isOnFocus: true });
  }

  onBlur() {
    this.setState({ isOnFocus: false });
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      keyboardType,
      autoCapitalize,
      autoCorrect,
      onSubmitEditing,
      editableTextInput,
      maxLength,
      width,
      showValidationMessage,
      validationMessage,
    } = this.props;

    const {
      inputOnBlurStyle,
      inputOnFocusStyle,
      inputWithValidationStyle,
      inputWithoutValidationStyle,
      labelViewStyle,
      labelTextStyle,
      validationTextStyle,
      containerStyle,
    } = Styles;

    const { isOnFocus } = this.state;

    const textInputStyle = {
      height: 50,
      width: _.isUndefined(width) ? Metrics.screenWidth * 0.9 : width,
    };

    return (
      <View style={containerStyle}>
        <View style={labelViewStyle}>
          <Text style={labelTextStyle}>
            {label}
          </Text>
          {
            showValidationMessage && (
              <Text style={validationTextStyle}>
                {validationMessage}
              </Text>
            )
          }
        </View>

        <TextInput
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          style={[
            textInputStyle,
            isOnFocus ? inputOnFocusStyle : inputOnBlurStyle,
            showValidationMessage ? inputWithValidationStyle : inputWithoutValidationStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onSubmitEditing={onSubmitEditing}
          editable={editableTextInput}
          maxLength={maxLength}
        />
      </View>
    );
  }
}

Input.defaultProps = {
  label: '',
  placeholder: '',
  secureTextEntry: false,
  keyboardType: 'default',
  autoCapitalize: 'none',
  autoCorrect: false,
  editableTextInput: true,
  maxLength: 30,
  width: Metrics.screenWidth * 0.9,
  showValidationMessage: false,
  validationMessage: '',
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  onSubmitEditing: PropTypes.func.isRequired,
  editableTextInput: PropTypes.bool,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  showValidationMessage: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default Input;
