import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
// import PropTypes from 'prop-types';

import HeaderBar from '../../commons/components/HeaderBar';

class GenerationPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderBar title="Generations" />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

GenerationPage.propTypes = {};

export default GenerationPage;
