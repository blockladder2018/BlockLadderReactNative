import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonDark } from 'App/Components';
import { LoginController, NavigationController } from 'App/Controllers';

class AccountScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <ButtonDark
          title = 'Log out'
          onPress={() => {
            LoginController.logout().then(() => {
              NavigationController.navigateToLogin();
            });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    country: login.country,
    username: login.username,
    user: login.user,
  };
};

export default connect(mapStateToProps)(AccountScreen);
