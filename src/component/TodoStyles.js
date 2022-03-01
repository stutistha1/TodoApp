import {StyleSheet, Dimensions} from 'react-native';

const TodoStyles = {
  main: {
    alignItems: 'center',
  },
  mainInput: {
    borderWidth: 4,
    height: 55,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,

    height: 40,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
  },
};

export const styles = StyleSheet.create(TodoStyles);
