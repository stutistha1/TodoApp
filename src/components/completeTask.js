import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import {useActionProvider} from '../Provider';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RenderItem({item}) {
  const actions = useActionProvider();

  return (
    <View style={styles.darkT.task}>
      <CheckBox
        disabled={false}
        tintColors={{true: 'white'}}
        value={true}
        onValueChange={() => actions.unFinishTask(item)}
      />

      <View style={{width: '70%'}}>
        <Text style={{fontSize: 21, color: 'white'}}>{item.text}</Text>
      </View>

      <TouchableOpacity onPress={() => actions.deleteFinished(item)}>
        <Icon name="delete" size={32} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  darkT: StyleSheet.create({
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
