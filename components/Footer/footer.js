import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.container}> 
          <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => navigation.navigate("Home")} >
                <Feather name="home" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{fontWeight:400 , fontSize:16, borderBottomWidth:1}}>Go to Word Ninja</Text>
            </TouchableOpacity>
      </View>      
    </View>
  )
}

export default footer

const styles = StyleSheet.create({
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    borderTopWidth:1,
    borderTopColor:'#EEEEEE',
    backgroundColor:'#FFF'
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:60,
    height:90,
    marginBottom:20
  }
})