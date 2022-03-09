import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const image = require('../img/logo2.png');

const Title = () => {
  const {containerStyle, imageStyle, titleStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Github User Search App</Text>
      <Image source={image} style={imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    padding: 20,
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
});

export default Title;
