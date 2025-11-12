import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RefactorSection from '../RefactorSection/index'
import TaskBoard from '../TaskBoard'
import AddButton from '../Button/addButton'
import { useState } from 'react'
import TaskModal from '../TaskModal/index'


const main = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [newTask, setNewTask] = useState(null)

  const handleSave=(taskData)=>{
    setModalVisible(false)
    setNewTask(taskData)
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <RefactorSection />
      <FlatList
        data={[{key: '1'}]}
        renderItem={() => (
          <View style={{backgroundColor: '#fff'}}>
            <TaskBoard newTask={newTask}/>
          </View>
          
        )}contentContainerStyle={{paddingBottom: 100}}
      />
      <AddButton onPress={()=>setModalVisible(true)}/>
      <TaskModal visible={isModalVisible} onClose={()=>setModalVisible(false)} onSave={handleSave}/>
    </View>
  );
};
export default main

const styles = StyleSheet.create({

})