import { StyleSheet, Text, View ,Image, Button} from 'react-native'
import React from 'react'
import RefactorSection from '../../RefactorSection'
import Footer from '../../Footer/footer'
import Header from '../../Header/Header'
import User from '../../../assets/user.png'
import User2 from '../../../assets/user2.png'
import User3 from '../../../assets/user3.png'

const Detail = ({route}) => {
    const {title,desc,date,columnTitle,assignee}=route.params
  return (
    <View style={styles.container}>
        <Header/>
        <RefactorSection/>
        <View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.userDetail}>           
                <Image style={styles.logo} source={User}/>
                <Text style={{color:'#A5A5A5',fontSize:12,paddingLeft:12}}>Reported By</Text>
                <Text style={{fontSize:12, marginLeft:8,fontWeight:'500'}}>{assignee}</Text>
            </View>

            <View style={styles.Column}>
                <Text style={styles.ColumnTitle}>{columnTitle}</Text>
                <Text style={{color:'#A5A5A5',fontSize:12,paddingLeft:12}}>{date}</Text>
            </View>

            <View style={styles.description}>
                <Text style={{color:'#A5A5A5',fontSize:16,paddingBottom:12}}>Description</Text>
                <View style={styles.desc}>
                    <Text style={{fontWeight:'300',fontSize:14,fontStyle:'italic'}}>{desc}</Text>        
                </View>                   
            </View>

            <View style={styles.Image}>
                <Image style={styles.logo} source={User2}/>
                <Image style={styles.logo} source={User3}/>
            </View>

        </View>
        
        <Footer/>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:4,
        backgroundColor:'white'
    },
    title:{
        fontWeight:'500',
        fontSize:18,
        paddingHorizontal:32,
        paddingVertical:12
    },
    logo: {
        width: 40, 
        height: 40, 
        resizeMode: 'cover',
        borderRadius:50,
        borderColor:'white',
        borderWidth:1
    },
    userDetail:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:32
    },
    ColumnTitle:{
        backgroundColor:'#744BFC',
        color:'white',
        fontWeight:'500',
        borderRadius:20,
        height:35,
        width:85,
        textAlign:'center',
        paddingTop:8
    },
    Column:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:33,
        paddingVertical:16
    },
    description:{
        paddingHorizontal:33,
        paddingVertical:16
    },
    desc:{
        backgroundColor:'#F2F2F2',
        height:'auto',
        padding:30,
        borderRadius:20
    },
    Image:{
        flexDirection:'row',
        paddingLeft:35
    },
  });
  