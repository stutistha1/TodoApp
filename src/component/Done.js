import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../actions/todoActions';
import {styles} from './TodoStyles';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Done = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();

  const data = useSelector(state => state);

  const todos = data.todos.todos;

  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
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
