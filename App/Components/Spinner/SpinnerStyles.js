import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'App/Themes';

export default StyleSheet.create({
  spinnerStyleCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  spinnerStyleTop: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 10,
  },
});
