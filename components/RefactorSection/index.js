import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import logo from '../../assets/wordninja-logo.png'

const index = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
        <View style={{paddingLeft:10}}>
            <Text style={styles.title}>Refactoring for Word Ninja</Text>
            <Text style={styles.subtitle}>New project for refactoring our app Word ninja</Text>
        </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:20
    },
    logo:{
        width: 60, 
        height: 50,
        backgroundColor:'#DFD5FF',
        resizeMode: 'contain',
        borderRadius:8
    },
    title:{
        fontSize:16, 
        fontWeight:700
    },
    subtitle:{
        fontSize:12,
        paddingTop:10,
        color:"#666"
    }
})