/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import _ from 'lodash';
import NavigationHeader from '../../components/NavigationHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    padding: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

});

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'HeadLines'}
        />
        <View style={styles.loginContainer}>
          <Text>HeadLines</Text>
        </View>
      </View>
    );
  }
}

export default Home;
