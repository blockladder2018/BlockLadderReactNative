import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './ButtonEnableDisableStyles';

const ButtonEnableDisable = ({ disabled, title, onPress }) => {
  const {
    containerStyle,
    containerDisabledStyle,
    rowStyle,
    labelStyle,
  } = Styles;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={containerStyle}
    >
      <View style={disabled ? containerDisabledStyle : containerStyle}>
        <View style={rowStyle}>
          <Text style={labelStyle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ButtonEnableDisable.propTypes = {
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonEnableDisable;
