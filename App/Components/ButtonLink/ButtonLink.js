import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './ButtonLinkStyles';

const ButtonLink = ({ title, onPress }) => {
  const { containerStyle, rowStyle, labelStyle } = Styles;

  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      onPress={onPress}
    >
      <View style={containerStyle}>
        <View style={rowStyle}>
          <Text style={labelStyle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonLink;
