import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header/Header'
const AddTask = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [column, setColumn] = useState('Backlog');
  const [assignee, setAssignee] = useState('')

  const handleSave = () => {
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      date: new Date().toLocaleDateString('tr-TR'),
      column,
      assignee
    };

    navigation.navigate('Home', { newTask });
  };
  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Header/>
        <View style={{padding:24}}>
            <Text style={styles.header}>Add Task</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Description"
                value={desc}
                multiline
                onChangeText={setDesc}
            />
            <TextInput
                style={styles.input}
                placeholder="Assignee"
                value={assignee}
                onChangeText={setAssignee}
            />

            <Text style={styles.label}>Status</Text>
            <Picker selectedValue={column} onValueChange={setColumn}>
                <Picker.Item label="Backlog" value="Backlog" />
                <Picker.Item label="To Do" value="To Do" />
                <Picker.Item label="In Progress" value="In Progress" />
            </Picker>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
</TouchableWithoutFeedback> 
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight:'600',
    marginBottom: 20,
    paddingTop:18,
    textAlign:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor:'#F2F2F2'
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center',
    marginTop:12
  },
  saveBtn: {
    backgroundColor: '#744BFC',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
