import React, { Component } from 'react';
import { Container, Text, Body, Button } from 'native-base';
import { connect } from 'react-redux';
import { Image, StyleSheet } from 'react-native';

import * as userActions from '../../../store/actions/userActions';

export class ProfileScreen extends Component {
  logOut = () => {
    this.props.removeUser();
    this.props.navigation.replace('Login');
  };

  render() {
    return (
      <Container style={styles.container}>
        <Body>
          <Image style={styles.imgae} source={{ uri: this.props.user.photo }} />
          <Text style={styles.name}>{this.props.user.name}</Text>
        </Body>
        <Button full danger bordered onPress={this.logOut}>
          <Text>Log out</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  imgae: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 30,
  },
});

const mapState = state => ({
  user: state.user,
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(ProfileScreen);
