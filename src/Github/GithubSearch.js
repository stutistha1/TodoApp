import axios from 'axios';

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import {CardUser} from './CardUser';

const GithubSearch = () => {
  const [insert, setInsert] = useState('');
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const search = async () => {
    Keyboard.dismiss();
    setUsers({});

    try {
      setLoading(true);
      const {data} = await axios.get(`https://api.github.com/users/${insert}`);

      setUsers(data);
      setLoading(false);
    } catch (error) {
      const errorData = error?.response?.data;

      setLoading(false);
      if (errorData) {
        setUsers(errorData);
      }

      Alert.alert('Error', errorData?.message || 'Please try again.');
    }
  };

  const repoScreen = () => {
    navigation.navigate('Github Repo', {
      name: users.login || '',
    });
  };

  const renderItem = () => {
    if (users?.message === 'No user available') {
      return (
        <View>
          <Text>{'Invalid user!!!\nPlease insert correct username.'}</Text>
        </View>
      );
    }

    if (users?.name || users?.login) {
      return (
        <TouchableOpacity activeOpacity={0.9} onPress={repoScreen}>
          <CardUser item={users} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.title}>
          <Text style={styles.titleStyle}>Search Github Users</Text>
        </View>

        <TextInput
          onChangeText={setInsert}
          value={insert}
          placeholder="Enter username"
          fontSize={20}
          underlineColorAndroid="black"
          style={{width: '100%'}}
          onSubmitEditing={search}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={search}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, marginVertical: 20}}>
        {loading ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          renderItem()
        )}
      </View>
    </View>
  );
};

export default GithubSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    flexDirection: 'row',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 14,
    marginTop: 8,
    width: 122,
    alignItems: 'center',
  },
  buttonText: {fontSize: 18, color: 'white'},
});
