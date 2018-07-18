import axios from 'axios';

import store from 'App/Redux';
import LoginRedux from 'App/Redux/Login';

class LoginController {

  clear() {
    return store.dispatch(LoginRedux.clear());
  }

  setCountry(country: string) {
    return store.dispatch(LoginRedux.setCountry(country));
  }

  setUsername(username: string) {
    return store.dispatch(LoginRedux.setUsername(username));
  }

  setPassword(password: string) {
    return store.dispatch(LoginRedux.setPassword(password));
  }

  setVerificationCode(verificationCode: string) {
    return store.dispatch(LoginRedux.setVerificationCode(verificationCode));
  }

  login() {
    return new Promise((resolve, reject) => {
      store.dispatch(LoginRedux.startLogin());
      const username = store.getState().login.username;
      const password = store.getState().login.password;

      return axios.post('http://138.197.223.133:8000/api/v1/users/login', {
        username,
        password,
      }).then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        store.dispatch(LoginRedux.loginSuccess(token, user));
        resolve();
      }).catch((error) => {
        const errorMessage = error.response.data.error;
        store.dispatch(LoginRedux.operationFail(errorMessage));
        reject(error);
      });
    });
  }

  logout() {
    return new Promise((resolve) => {
      store.dispatch(LoginRedux.clear());
      resolve();
    });
  }

  sendVerify() {
    return new Promise((resolve, reject) => {
      store.dispatch(LoginRedux.clearMessages());
      const username = store.getState().login.username;
      return axios.post('http://138.197.223.133:8000/api/v1/users/send_verify', {
        username,
      }).then((response) => {
        const visibleMessage = response.data.message;
        store.dispatch(LoginRedux.sendVerifySuccess(visibleMessage));
        resolve();
      }).catch((error) => {
        const errorMessage = error.response.data.message;
        store.dispatch(LoginRedux.operationFail(errorMessage));
        reject();
      });
    });
  }

  register() {
    return new Promise((resolve, reject) => {
      store.dispatch(LoginRedux.clearMessages());
      const state = store.getState().login;
      const username = state.username;
      const agree = true; // TODO: Add checkbox
      const invitationCode = null; // Disabled temperarily
      const password = state.password;
      const verificationCode = state.verificationCode;
      return axios.post('http://138.197.223.133:8000/api/v1/users/register', {
        username,
        agree,
        invitation_code: invitationCode,
        password,
        verification_code: verificationCode,
      }).then((response) => {
        const visibleMessage = response.data.message;
        store.dispatch(LoginRedux.registerSuccess(visibleMessage));
        resolve();
      }).catch((error) => {
        const errorMessage = error.response.data.message;
        store.dispatch(LoginRedux.operationFail(errorMessage));
        reject();
      });
    });
  }
}

export default LoginController;
