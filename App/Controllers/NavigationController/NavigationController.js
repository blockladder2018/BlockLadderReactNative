import store from 'App/Redux';
import NavigationRedux from 'App/Redux/Navigation';

class NavigationController {

  navigateToAfterLogin() {
    return store.dispatch(NavigationRedux.changeRoot('after-login'));
  }

  navigateToLogin() {
    return store.dispatch(NavigationRedux.changeRoot('login'));
  }
}

export default NavigationController;
