/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import Navigation from '../../utils/navigation';
import { screenNames, auth } from '../../utils/constant';
import {images} from '../../assets/images'

const styles = StyleSheet.create({

  splashImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
  }

  componentDidMount() {
    setTimeout(() => {
      this.goToScreen();
    }, 2000);
  }

  goToScreen() {
      let screenName = screenNames.HEADLINES_SCREEN;
      Navigation.sharedInstance().resetRouteName(
        screenName,
      );
  }

  render() {
    return (
        <ImageBackground source={images.Logo} resizeMode={'center'} style={styles.splashImage}></ImageBackground>
    );
  }
}

export default Splash;
