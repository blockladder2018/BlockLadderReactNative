import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';
import _ from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  selectedProxy: '',
  proxys: {},
  isConnected: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  selectProxy: ['selectedProxy'],
  setProxys: ['proxys'],
  setConnectionStatus: ['isConnected'],
  clear: null,
});

Creators.fetchProxys = () => {
  return (dispatch) => {
    return axios.get('http://138.197.223.133:8000/api/v1/proxys')
      .then((response) => {
        //const arrayOfProxys = response.data.proxys;
        // fixture data
        const arrayOfProxys = [
          {"id": 1, "ip": "138.197.223.133", "port": "8381", "password": "yahoo1011", "encryption": "aes-256-cfb", "status": ""},
          {"id": 2, "ip": "138.197.223.134", "port": "8381", "password": "yahoo1012", "encryption": "aes-256-cfb", "status": ""},
          {"id": 3, "ip": "138.197.223.135", "port": "8381", "password": "yahoo1013", "encryption": "aes-256-cfb", "status": ""},
        ];

        const proxys = _.keyBy(arrayOfProxys, proxy => proxy.id);

        return dispatch(Creators.setProxys(proxys));
      })
      .catch(() => console.log('Error calling fetchProxys'));
  };
};

export default Creators;

/* ------------- Reducers ------------- */
export const setProxysReducer = (state = INITIAL_STATE, { proxys }) => {
  return state.merge({ proxys });
};

export const selectProxyReducer = (state = INITIAL_STATE, { selectedProxy }) => {
  return state.merge({ selectedProxy });
};


export const setConnectionStatusReducer = (state = INITIAL_STATE, { isConnected }) => {
  return state.merge({ isConnected });
}

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_PROXY]: selectProxyReducer,
  [Types.SET_PROXYS]: setProxysReducer,
  [Types.SET_CONNECTION_STATUS]: setConnectionStatusReducer,
  [Types.CLEAR]: clearReducer,
});
