import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Task from './incompleteTask';

export default function Tasks({tasks}) {
  return (
    <>
      <View style={styles.root}>
        <FlatList
          contentContainerStyle={{width: '100%', margin: 12, paddingBottom: 52}}
          data={tasks}
          renderItem={({item}) => <Task item={item} />}
          keyExtractor={index => index + Math.random()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
