import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import ConnectScreen from './ConnectScreen';
import NewsScreen from './NewsScreen';
import AccountScreen from './AccountScreen';
import RegisterScreen from './RegisterScreen';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('BlockLadderReactNative.LoginScreen', () => LoginScreen, store, Provider);
	Navigation.registerComponent('BlockLadderReactNative.ConnectScreen', () => ConnectScreen, store, Provider);
	Navigation.registerComponent('BlockLadderReactNative.NewsScreen', () => NewsScreen, store, Provider);
	Navigation.registerComponent('BlockLadderReactNative.AccountScreen', () => AccountScreen, store, Provider);
	Navigation.registerComponent('BlockLadderReactNative.RegisterScreen', () => RegisterScreen, store, Provider);
}
