import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const CardUser = ({item}) => (
  <View style={STYLES.container}>
    <Image
      source={{uri: item.avatar_url}}
      style={{width: 120, height: 120, borderRadius: 14}}
      resizeMode="contain"
    />

    <View style={{marginLeft: 14}}>
      <Text style={STYLES.header}>Profile Information</Text>

      <Text style={STYLES.text}>{`Username: ${item.login || 'N/A'}`}</Text>

      <Text style={STYLES.text}>{`Name: ${item.name || 'N/A'}`}</Text>

      <Text style={STYLES.text}>{`Followers: ${item.followers || 0}`}</Text>

      <Text style={STYLES.text}>{`Following: ${item.following || 0}`}</Text>
    </View>
  </View>
);
export default CardUser;

const STYLES = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 6,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.33,
    shadowRadius: 2.62,
    borderRadius: 12,
    marginTop: 20,
    padding: 14,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
});
