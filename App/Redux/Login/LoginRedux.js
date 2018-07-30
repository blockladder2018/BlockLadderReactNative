import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  mobileNumber: '',
  password: '',
  verificationCode: '',
  token: '',
  user: '',
  isLogging: false,
  visibleMessage: '',
  errorMessage: '',
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setMobileNumber: ['mobileNumber'],
  setPassword: ['password'],
  setVerificationCode: ['verificationCode'],
  setToken: ['token'],
  setUser: ['user'],

  clearMessages: null,
  startLogin: null,
  loginSuccess: ['token', 'user'],
  sendVerifySuccess: ['visibleMessage'],
  registerSuccess: ['visibleMessage'],
  operationFail: ['errorMessage'],
  clear: null,
});

export default Creators;

/* ------------- Reducers ------------- */
export const setMobileNumberReducer = (state = INITIAL_STATE, { mobileNumber }) => {
  return state.merge({ mobileNumber });
};

export const setPasswordReducer = (state = INITIAL_STATE, { password }) => {
  return state.merge({ password });
};

export const setVerificationCodeReducer = (state = INITIAL_STATE, { verificationCode }) => {
  return state.merge({ verificationCode });
};

export const setTokenReducer = (state = INITIAL_STATE, { token }) => {
  return state.merge({ token });
};

export const setUserReducer = (state = INITIAL_STATE, { user }) => {
  return state.merge({ user });
}

export const startLoginReducer = (state = INITIAL_STATE) => {
  return state.merge({ isLogging: true });
}

export const loginSuccessReducer = (state = INITIAL_STATE, { token, user }) => {
  return state.merge({
    isLogging: false,
    token,
    user,
  });
}

export const sendVerifySuccessReducer = (state = INITIAL_STATE, { visibleMessage }) => {
  return state.merge({ visibleMessage });
}

export const registerSuccessReducer = (state = INITIAL_STATE, { visibleMessage }) => {
  return state.merge({ visibleMessage });
}

export const operationFailReducer = (state = INITIAL_STATE, { errorMessage }) => {
  return state.merge({
    isLogging: false,
    errorMessage,
  });
}

export const clearMessagesReducer = (state = INITIAL_STATE) => {
  return state.merge({
    visibleMessage: '',
    errorMessage: '',
  })
}

export const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_NUMBER]: setMobileNumberReducer,
  [Types.SET_PASSWORD]: setPasswordReducer,
  [Types.SET_VERIFICATION_CODE]: setVerificationCodeReducer,
  [Types.SET_TOKEN]: setTokenReducer,
  [Types.SET_USER]: setUserReducer,
  [Types.START_LOGIN]: startLoginReducer,
  [Types.LOGIN_SUCCESS]: loginSuccessReducer,
  [Types.SEND_VERIFY_SUCCESS]: sendVerifySuccessReducer,
  [Types.REGISTER_SUCCESS]: registerSuccessReducer,
  [Types.OPERATION_FAIL]: operationFailReducer,
  [Types.CLEAR_MESSAGES]: clearMessagesReducer,
  [Types.CLEAR]: clearReducer,
});
