/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navigation from '../../utils/navigation';
import { screenNames, auth } from '../../utils/constant';

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
  }

  componentDidMount() {
    this.goToScreen();
  }

  goToScreen() {
      let screenName = screenNames.HOME_SCREEN;
      Navigation.sharedInstance().resetRouteName(
        screenName,
      );
 
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Splash</Text>
      </View>
    );
  }
}

export default Splash;
