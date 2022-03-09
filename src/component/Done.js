import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveDoneTodo} from '../actions/todoActions';
import {styles} from './TodoStyles';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

const Done = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state);

  const todos = data.todos.doneTodos;

  const removeTodo = item => {
    dispatch(RemoveDoneTodo(item));
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                {item}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {' '}
                X{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <Text
        style={{
          alignSelf: 'stretch',
          paddingLeft: 20,
          fontSize: 19,
          color: 'black',
          fontWeight: 'bold',
          padding: 20,
        }}>
        Completed Todos :
      </Text>
      {renderTodoList()}
    </View>
  );
};

export default Done;
