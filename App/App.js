// import { Platform } from 'react-native'; // iOS / Android
import { Provider } from "react-redux";
import { Navigation } from 'react-native-navigation';

import store from 'App/Redux';
import { registerScreens } from 'App/Screens';
import LoginRedux from 'App/Redux/Login/LoginRedux';
import NavigationRedux from 'App/Redux/Navigation/NavigationRedux';

let currentRoot = null;

const App = () => {
  registerScreens(store, Provider);
  store.subscribe(onStoreUpdate);
  store.dispatch(NavigationRedux.changeRoot('login'));
}

const onStoreUpdate = () => {
  let root = store.getState().navigation.root;

  if (currentRoot !== root) {
    currentRoot = root;
    startApp(root);
  }
}

const startApp = (root) => {
  switch (root) {
    case 'login':
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'BlockLadderReactNative.LoginScreen',
          title: 'Welcome',
          navigatorStyle: {},
          navigatorButtons: {},
        },
      });
      return;

    case 'after-login':
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Connect',
            screen: 'BlockLadderReactNative.ConnectScreen',
            icon: require('App/Images/checkmark.png'),
            selectedIcon: require('App/Images/checkmark.png'),
            title: 'Connect',
            overrideBackPress: false,
            navigatorStyle: {},
          },
          {
            label: 'News',
            screen: 'BlockLadderReactNative.NewsScreen',
            icon: require('App/Images/checkmark.png'),
            selectedIcon: require('App/Images/checkmark.png'),
            title: 'News',
            overrideBackPress: false,
            navigatorStyle: {},
          },
          {
            label: 'Account',
            screen: 'BlockLadderReactNative.AccountScreen',
            icon: require('App/Images/checkmark.png'),
            selectedIcon: require('App/Images/checkmark.png'),
            title: 'Account',
            navigatorStyle: {},
          }
        ],
      });
      return;

    default:
      console.log("Not Root Found");
  }
};

export default App;
