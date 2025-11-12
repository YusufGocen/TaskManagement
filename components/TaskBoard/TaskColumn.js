import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from './TaskCard'
const TaskColumn = ({data}) => {

  return (
    <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.count}>{data.data.length}</Text>
        </View>
        <FlatList data={data.data} horizontal keyExtractor={(item) => item.id.toString()}
         showsHorizontalScrollIndicator={false} renderItem={({item})=><TaskCard task={item} columnTitle={data.title}/>}>
        </FlatList>
    </View>
  )
}

export default TaskColumn

const styles = StyleSheet.create({
    container:{
        marginBottom:24,
        padding:12,
        
    },
    title:{
        fontSize:18,
        fontWeight:"700",
        marginBottom:12,
        marginLeft:16
    },
    count:{
      fontSize:14,
      color:'#D8D8D8',
      paddingHorizontal:12,
      paddingVertical:3,
      fontWeight:'bold'
    }
})