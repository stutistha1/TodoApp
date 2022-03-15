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
import axios from 'axios';

import {CardUser} from './CardUser';

const GithubSearch = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSearchPress = async () => {
    Keyboard.dismiss();
    setUsers({});

    try {
      setLoading(true);

      // https://api.github.com/users/nepsians
      // const repsonse = await fetch(`https://api.github.com/users/${input}`);

      const {data} = await axios.get(`https://api.github.com/users/${input}`);

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

  const navToRepoScreen = () => {
    navigation.navigate('Github Repo', {
      name: users.login || '',
    });
  };

  const renderContent = () => {
    if (users?.message === 'Not Found') {
      return (
        <View>
          <Text
            style={{
              textAlign: 'center',
            }}>
            {'User not found!!!\nPlease try again with another username.'}
          </Text>
        </View>
      );
    }

    if (users?.name || users?.login) {
      return (
        <TouchableOpacity activeOpacity={0.9} onPress={navToRepoScreen}>
          <CardUser item={users} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={{alignItems: 'center'}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Search</Text>
        </View>

        <TextInput
          onChangeText={setInput}
          value={input}
          placeholder="Search for a GitHub user"
          underlineColorAndroid="gray"
          style={{width: '100%'}}
          onSubmitEditing={onSearchPress}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onSearchPress}
          style={styles.increaseBtnStyle}>
          <Text style={styles.btnTxt}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, marginVertical: 18}}>
        {loading ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          renderContent()
        )}
      </View>
    </View>
  );
};

export default GithubSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
  },
  button: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  increaseBtnStyle: {
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 14,
    marginTop: 8,
    width: 122,
    alignItems: 'center',
  },
  btnTxt: {fontSize: 18, color: 'white'},
});
