import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; //link and rebuild after installing
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import {useActionProvider} from '../Provider';
import CheckBox from '@react-native-community/checkbox';

export default function RenderItem({item}) {
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(item.text);

  const actions = useActionProvider();

  function updateAtask() {
    setEditing(false);

    actions.updateTask({task: item, updatedText});
  }

  function cancelEdit() {
    setUpdatedText(item.text);

    setEditing(false);
  }

  const displayTask = (
    <TouchableOpacity style={{width: '70%'}} onPress={() => setEditing(true)}>
      <Text style={{fontSize: 21, color: 'white'}}>{item.text}</Text>
    </TouchableOpacity>
  );

  const editTask = (
    <TextInput
      style={styles.darkTheme.editor}
      onChangeText={text => setUpdatedText(text)}
      value={updatedText}
      onSubmitEditing={updateAtask}
    />
  );

  const saveButton = (
    <TouchableOpacity onPress={updateAtask}>
      <Icon name="done" color={'white'} size={32} />
    </TouchableOpacity>
  );

  const cancelButton = (
    <TouchableOpacity onPress={cancelEdit}>
      <Icon name="cancel" color={'white'} size={34} />
    </TouchableOpacity>
  );

  const deleteButton = (
    <TouchableOpacity onPress={() => actions.deleteUnFinished(item)}>
      <Icon name="delete" color={'white'} size={32} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.darkTheme.task}>
      <CheckBox
        tintColors={{
          false: 'white',
          true: 'white',
        }}
        disabled={false}
        value={false}
        onValueChange={() => actions.finishTask(item)}
      />

      {isEditing ? editTask : displayTask}
      {isEditing ? cancelButton : null}
      {isEditing ? saveButton : deleteButton}
    </View>
  );
}

const styles = {
  darkTheme: StyleSheet.create({
    editor: {
      height: 65,
      fontSize: 16,
      width: '62%',
      color: 'white',
    },
    task: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 72,
      width: '90%',
      margin: 5,
      padding: 16,
      backgroundColor: 'black',
      borderRadius: 10,
      elevation: 2,
    },
  }),
};
