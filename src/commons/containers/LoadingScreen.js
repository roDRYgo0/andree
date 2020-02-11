import React from 'react';
import { Container } from 'native-base';
import { StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
  return (
    <Container style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/img/Pokeball.png')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default LoadingScreen;
