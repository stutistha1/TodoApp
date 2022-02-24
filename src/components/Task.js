import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Keyboard,
} from 'react-native';

import {useActionProvider} from '../Provider';

export default function AddTask() {
  const actions = useActionProvider();

  const [task, setTask] = useState({});
  const [usedChar, setUsed] = useState(0);

  const addAtask = () => {
    Keyboard.dismiss();

    setUsed(0);
    setTask({});

    if (task !== {} && task.text && task.text !== '') {
      actions.addTask(task);
    }
  };

  const updateNewTask = text => {
    setUsed(text.length);

    setTask({
      text: text,
    });
  };
  return (
    <>
      <View style={styles.main.container}>
        <View style={styles.darkT.addTask}>
          <TextInput
            style={styles.darkT.input}
            value={task.text}
            placeholderTextColor={'white'}
            onChangeText={updateNewTask}
            placeholder="Add a Task..."
            maxLength={50}
          />

          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              color: 'white',
            }}>{`${usedChar}/50`}</Text>

          <TouchableOpacity style={styles.main.plus} onPress={addAtask}>
            <Text style={{color: 'gray', fontSize: 30}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = {
  main: StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 45,
    },
    plus: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      height: 40,
      width: 40,
      borderRadius: 100,
      margin: 7,
    },
  }),
  darkT: StyleSheet.create({
    addTask: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      elevation: 3,
      width: '90%',
      padding: 3,
      backgroundColor: 'black',
      borderRadius: 40,
    },
    input: {
      width: '65%',
      paddingLeft: 20,
      color: 'white',
      fontSize: 20,
    },
  }),
};
