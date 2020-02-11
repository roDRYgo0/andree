import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { connect } from 'react-redux';

import * as userActions from '../../../store/actions/userActions';

// import PropTypes from 'prop-types';

class LoginScreen extends Component {
  state = {
    isLoading: false,
  };

  toggleLoading = () => {
    this.setState(state => ({ isLoading: !state.isLoading }));
  };

  signIn = async () => {
    try {
      this.toggleLoading();
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      this.toggleLoading();
      this.props.setUser(user);
      this.gotToHome();
    } catch (error) {
      this.toggleLoading();
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  gotToHome = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  componentDidMount = () => {
    GoogleSignin.configure();
    if (this.props.user.id) {
      this.gotToHome();
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Image
            style={styles.pokedex}
            source={require('../../../assets/img/pokedex.png')}
          />
          <View style={styles.partners}>
            <Image
              style={styles.harvard}
              source={require('../../../assets/img/harvard.png')}
            />
            <Image
              style={styles.edx}
              source={require('../../../assets/img/edx.png')}
            />
          </View>
        </View>
        <View style={styles.signIn}>
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.signIn}
            disabled={this.state.isLoading}
          />
          {this.state.isLoading && <ActivityIndicator />}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pokedex: {
    width: 350,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  harvard: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
  },
  edx: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  partners: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 212,
    height: 48,
  },
  signIn: {
    height: 100,
  },
});

LoginScreen.propTypes = {};

const mapState = state => {
  return { user: state.user };
};

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(LoginScreen);
