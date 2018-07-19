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
    elevation: 3,
  },

  rowStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  labelStyle: {
    color: Colors.blue,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

});
