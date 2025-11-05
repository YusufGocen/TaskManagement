import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import Main from '../../components//Main/main'


const Home = () => {
  
  return (
    <View style={styles.text}>
      <Header/>
      <Main/>
      <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  text:{
    flex:4
  }
})