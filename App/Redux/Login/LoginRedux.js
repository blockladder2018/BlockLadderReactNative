import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  country: '',
  username: '',
  password: '',
  verificationCode: '',
  token: '',
  user: '',
  isLogging: false,
  errorMessage: '',
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCountry: ['country'],
  setUsername: ['username'],
  setPassword: ['password'],
  setVerificationCode: ['verificationCode'],
  setToken: ['token'],
  setUser: ['user'],
  startLogin: null,
  loginSuccess: ['token', 'user'],
  loginFail: ['errorMessage'],
  clear: null,
});

Creators.register = () => {
  return (dispatch, getState) => {
    const state = getState().login;
    return axios.post('http://138.197.223.133:8000/api/v1/users/register', {
      country: state.country,
      username: state.username,
      password: state.password,
      invitation_code: state.invitationCode,
      verification_code: state.verificationCode,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
};

Creators.sentSmsVerification = () => {
  return (dispatch, getState) => {
    const state = getState().login;
    return axios.post('http://138.197.223.133:8000/api/v1/users/sent_sms_verification', {
      username: state.username,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
};

export default Creators;

/* ------------- Reducers ------------- */
export const setCountryReducer = (state = INITIAL_STATE, { country }) => {
  return state.merge({ country });
};

export const setUsernameReducer = (state = INITIAL_STATE, { username }) => {
  return state.merge({ username });
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

export const loginFailReducer = (state = INITIAL_STATE, { errorMessage }) => {
  return state.merge({
    isLogging: false,
    errorMessage,
  });
}

export const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COUNTRY]: setCountryReducer,
  [Types.SET_USERNAME]: setUsernameReducer,
  [Types.SET_PASSWORD]: setPasswordReducer,
  [Types.SET_VERIFICATION_CODE]: setVerificationCodeReducer,
  [Types.SET_TOKEN]: setTokenReducer,
  [Types.SET_USER]: setUserReducer,
  [Types.START_LOGIN]: startLoginReducer,
  [Types.LOGIN_SUCCESS]: loginSuccessReducer,
  [Types.LOGIN_FAIL]: loginFailReducer,
  [Types.CLEAR]: clearReducer,
});
