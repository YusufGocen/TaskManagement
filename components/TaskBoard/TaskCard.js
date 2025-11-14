import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Detail from './TaskDetail/Detail'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const TaskCard = ({task,columnTitle , onDelete}) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Detail",
    {title:task.title,
    desc:task.desc,
    date:task.date,
    columnTitle:columnTitle ,
    assignee:task.assignee}
    )}>
      <TouchableOpacity style={styles.deleteBtn} onPress={()=>onDelete(task.id)}>
        <Entypo name="cross" size={24} color="black"/>
      </TouchableOpacity>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.desc}>{task.desc.slice(0,135)}...</Text>
      <View style={styles.dateContainer}>
        <MaterialIcons name="calendar-month" size={14} color="#9F9F9F"/>
        <Text style={{color:'#9F9F9F',fontSize:12,paddingLeft:8}}>{task.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TaskCard

const styles = StyleSheet.create({
    card:{
        borderRadius:16,
        padding:16,
        borderWidth:1,
        borderColor:"#E7E9EA",
        marginRight:12,
        width:360,
        height:180,
        shadowColor:"#000",
        shadowOpacity:0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        marginBottom:7
    },
    desc:{
        fontSize:14,
        color:"#6c6c6c"
    },
    dateContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end',
      padding:4,
    },
    deleteBtn:{
      position:'absolute',
      top:8,
      right:4,
      zIndex:10,
      padding:4
    }
})