import { StyleSheet } from 'react-native';

import {
  Colors,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  labelViewStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  labelTextStyle: {
    color: Colors.black,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

  validationTextStyle: {
    color: Colors.red,
    fontSize: Fonts.size.h4,
  },

  inputOnBlurStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    color: Colors.black,
    backgroundColor: Colors.white,
    padding: 10,
    fontSize: Fonts.size.h3,
    borderWidth: 1,
  },

  inputOnFocusStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    color: Colors.black,
    backgroundColor: Colors.white,
    padding: 10,
    fontSize: Fonts.size.h3,
    borderWidth: 1,
  },

  inputWithValidationStyle: {
    borderColor: Colors.red,
    borderWidth: 1,
  },

});
