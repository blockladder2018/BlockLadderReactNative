import { combineReducers } from 'redux';
import configureStore from './CreateStore';

const createStore = () => {
  const rootReducer = combineReducers({
    login: require('./Login/LoginRedux').reducer,
    vpn: require('./Vpn/VpnRedux').reducer,
    navigation: require('./Navigation/NavigationRedux').reducer,
  });

  return configureStore(rootReducer);
};

const store = createStore();

export default store;
