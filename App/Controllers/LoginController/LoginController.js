import axios from 'axios';

import store from 'App/Redux';
import LoginRedux from 'App/Redux/Login';

class LoginController {

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
        const message = error.response.data.error;
        store.dispatch(LoginRedux.loginFail(message));
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

  register() {

  }

  sendVerify() {

  }
}

export default LoginController;
