import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './ButtonDarkStyles';

const ButtonDark = ({ onPress, title }) => {
  const { containerStyle, rowStyle, labelStyle } = Styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
    >
      <View style={rowStyle}>
        <Text style={labelStyle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonDark.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonDark;
