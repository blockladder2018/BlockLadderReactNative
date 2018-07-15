import React from 'react';
import { Text, View, Picker } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './PickerWithLabelStyles';

const PickerWithLabel = (props) => {
  const {
    label,
    selectedValue,
    onValueChange,
    data,
    enablePicker,
  } = props;

  const {
    containerStyle,
    labelStyle,
    subContainerStyle,
    pickerStyle,
  } = Styles;

  const options = Object.keys(data).map(s => <Picker.Item key={s} label={data[s].ip} value={s} />);

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <View style={subContainerStyle}>
        <Picker
          style={pickerStyle}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          enabled={enablePicker}
        >
          {options}
        </Picker>
      </View>
    </View>
  );
};

export default PickerWithLabel;
