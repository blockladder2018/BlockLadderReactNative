import { StyleSheet } from 'react-native';

import {
  Colors,
  Metrics,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  containerStyle: {
    height: 50,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: Colors.amber,
    elevation: 3,
  },

  containerDisabledStyle: {
    height: 50,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: Colors.steel,
    elevation: 3,
  },

  rowStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelStyle: {
    color: Colors.black,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

});
