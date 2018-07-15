import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './ButtonLightStyles';

const ButtonLight = ({ title, onPress }) => {
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

ButtonLight.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonLight;
