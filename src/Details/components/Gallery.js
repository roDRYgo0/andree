import React, { useState } from 'react';
import {} from 'native-base';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';

const Gallery = props => {
  const [toggleImage, setToggleImage] = useState(true);
  const someImgae = () => {
    return (
      props.sprites.front_default &&
      props.sprites.back_default &&
      props.sprites.front_famela &&
      props.sprites.back_famela &&
      props.sprites.front_shiny &&
      props.sprites.back_shiny &&
      props.sprites.front_shiny_female &&
      props.sprites.back_shiny_female
    );
  };

  return (
    <View style={styles.container}>
      {!toggleImage ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setToggleImage(!toggleImage)}>
          {!props.sprites.front_default ? (
            <Text style={styles.noImgae}>No Image</Text>
          ) : (
            <>
              {someImgae && (
                <View style={styles.column}>
                  <Text style={styles.text}>Default</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.front_default }}
                  />
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.back_default }}
                  />
                </View>
              )}
              {props.sprites.front_famela && (
                <View style={styles.column}>
                  <Text style={styles.text}>Famela</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.front_famela }}
                  />
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.back_famela }}
                  />
                </View>
              )}
              {props.sprites.front_shiny && (
                <View style={styles.column}>
                  <Text style={styles.text}>Shiny</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.front_shiny }}
                  />
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.back_shiny }}
                  />
                </View>
              )}
              {props.sprites.front_shiny_female && (
                <View style={styles.column}>
                  <Text style={styles.text}>Shiny female</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.front_shiny_female }}
                  />
                  <Image
                    style={styles.image}
                    source={{ uri: props.sprites.back_shiny_female }}
                  />
                </View>
              )}
            </>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setToggleImage(!toggleImage)}>
          {props.sprites.front_default ? (
            <>
              <Image
                style={styles.imageLarge}
                source={{ uri: props.sprites.front_default }}
              />
              {props.sprites.back_default && (
                <Image
                  style={styles.imageLarge}
                  source={{ uri: props.sprites.back_default }}
                />
              )}
            </>
          ) : (
            <Text style={styles.noImgae}>No Image</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  column: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageLarge: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  noImgae: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 50,
  },
});

Gallery.propTypes = {};

export default Gallery;
