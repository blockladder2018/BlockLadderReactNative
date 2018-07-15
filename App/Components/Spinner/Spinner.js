import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './SpinnerStyles';
import { Colors } from 'App/Themes';

const Spinner = ({ size, text, alignment }) => {
  const { spinnerStyleCenter, spinnerStyleTop, textStyle } = Styles;

  let spinnerStyle = spinnerStyleCenter;
  if (alignment && alignment === 'top') {
    spinnerStyle = spinnerStyleTop;
  }

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator
        size={size || 'large'}
        color={Colors.amber}
      />
      {
        text && (
          <Text style={textStyle}>
            {text}
          </Text>
        )
      }
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  alignment: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
  text: 'Loading',
  alignment: '',
};

export default Spinner;
