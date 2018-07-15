import { StyleSheet } from 'react-native';

import {
  Colors,
  Metrics,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  containerStyle: {
    height: 55,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: Colors.steel,
    marginBottom: 7,
  },

  rowStyle: {
    flex: 1,
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
