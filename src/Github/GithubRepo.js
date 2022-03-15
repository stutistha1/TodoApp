import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Alert,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';

const GithubRepo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const route = useRoute();
  const name = route.params.name;

  useEffect(() => {
    getRepoList();
  }, []);

  const getRepoList = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(
        `https://api.github.com/users/${name}/repos`,
      );

      setRepos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Please try again');
    }
  };

  const renderItem = ({item}) => (
    <View style={Styles.container}>
      <Text style={Styles.header}>{item.name}</Text>

      <Text style={Styles.text}>Language used: {item.language || 'N/A'}</Text>

      <Text style={Styles.text}>
        Created at: {moment(item.created_at).format('MMM DD, YYYY')}
      </Text>
    </View>
  );

  const emptyView = () => (
    <View>
      <Text>User repository not found</Text>
    </View>
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={'large'} color="#222" />
      ) : (
        <FlatList
          data={repos || []}
          renderItem={renderItem}
          ListEmptyComponent={emptyView}
        />
      )}
    </View>
  );
};

export default GithubRepo;

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});
