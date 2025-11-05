import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RefactorSection from '../RefactorSection/index'
import TaskBoard from '../TaskBoard'
import AddButton from '../Button/addButton'


const main = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <RefactorSection />
      <FlatList
        data={[{key: '1'}]}
        renderItem={() => (
          <View style={{backgroundColor: '#fff'}}>
            <TaskBoard/>
          </View>
          
        )}contentContainerStyle={{paddingBottom: 100}}
      />
      <AddButton />

    </View>
  );
};
export default main

const styles = StyleSheet.create({

})