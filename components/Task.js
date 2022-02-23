import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: 'black',
    fontSize: 20,
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 4,
  },
});

export default Task;
