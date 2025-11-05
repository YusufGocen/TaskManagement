import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    
            <View style={styles.headerContainer}>
        
                <View style={styles.left}>
                    <Image style={styles.logo} source={logo}/>
                </View>

                <View style={styles.right}>
                    
                    <TouchableOpacity 
                        style={styles.iconButton}
                        onPress={() => console.log('Search Tıklandı')} >
                        <Feather name="search" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.iconButton}
                        onPress={() => console.log('Settings Tıklandı')} >
                        <Feather name="settings" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </View>

    );

}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
       backgroundColor: '#744BFC',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: 125,
        paddingTop:50,
        width:"100%", 
        paddingHorizontal: 15
    },
    left: {
      paddingLeft:25
    },
    logo: {
        width: 100, 
        height: 40, 
        resizeMode: 'contain',
    },
    right: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingRight:10
    },
    iconButton: {
        marginLeft: 15, 
        padding: 5, 
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    }
})