import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const CardUser = ({item}) => (
  <View style={Styles.container}>
    <Image
      source={{uri: item.avatar_url}}
      style={{width: 120, height: 120, borderRadius: 14}}
      resizeMode="contain"
    />

    <View style={{marginLeft: 14}}>
      <Text style={Styles.header}>Profile Information</Text>

      <Text style={Styles.text}>{`Username: ${item.login || 'N/A'}`}</Text>

      <Text style={Styles.text}>{`Name: ${item.name || 'N/A'}`}</Text>

      <Text style={Styles.text}>{`Followers: ${item.followers || 0}`}</Text>

      <Text style={Styles.text}>{`Following: ${item.following || 0}`}</Text>
    </View>
  </View>
);
export default CardUser;

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
});
