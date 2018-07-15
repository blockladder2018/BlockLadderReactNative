import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonEnableDisable, PickerWithLabel, Spinner } from 'App/Components';
import VpnRedux from 'App/Redux/Vpn/VpnRedux';

class ConnectScreen extends Component {

  componentWillMount() {
    this.props.fetchProxys().then(() => {
      console.log('fetch proxys');
    }).catch(() => {
      console.log('error');
    });
  }

  render() {
    if (!this.props.proxys) {
      return <Spinner />;
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex: 1, flexDirection: 'column', marginBottom: 100 }}>
          <PickerWithLabel
            label={'Select a proxy server'}
            selectedValue={this.props.selectedProxy}
            onValueChange={(itemValue, itemIndex) => this.props.selectProxy(itemValue)}
            data={this.props.proxys}
            enablePicker={true}
          />
          <ButtonEnableDisable
            disabled={_.isEmpty(this.props.selectedProxy)}
            title={this.props.isConnected ? 'Disconnect' : 'Connect'}
            onPress={() => {
              this.props.setConnectionStatus(!this.props.isConnected);
              console.log('Selected proxy server ' + this.props.selectedProxy.id);
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ vpn }) => {
  return {
    proxys: vpn.proxys,
    selectedProxy: vpn.selectedProxy,
    isConnected: vpn.isConnected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProxys: () => {
      return dispatch(VpnRedux.fetchProxys());
    },
    selectProxy: (selectedProxy) => {
      dispatch(VpnRedux.selectProxy(selectedProxy));
    },
    setConnectionStatus: (status) => {
      dispatch(VpnRedux.setConnectionStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectScreen);
