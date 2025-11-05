import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import splashScreen from '../../assets/SplashScreen.jpg'


const SplashScreen = () => {
  return (
    <View style={styles.container}> 
      <Image source={splashScreen} style={styles.image}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    image:{
        flex:1,
        width: '100%',
        resizeMode:'cover'
    }
})