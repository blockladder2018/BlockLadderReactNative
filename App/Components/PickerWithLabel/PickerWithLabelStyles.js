import { StyleSheet } from 'react-native';

import {
  Colors,
  Metrics,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },

  labelStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    color: Colors.black,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

  subContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  pickerStyle: {
    flex: 1,
  },

});
