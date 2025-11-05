import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const addButton = () => {
    const navigation =useNavigation()
  return (
    <View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AddTask')}>
               <Entypo name="squared-plus" size={48} color="#744BFC"/>
            </TouchableOpacity>
    </View>
  )
}
export default addButton

const styles = StyleSheet.create({
    button:{
        position: 'absolute',
        bottom: 120,
        right: 30,
        zIndex: 20,
      }
})