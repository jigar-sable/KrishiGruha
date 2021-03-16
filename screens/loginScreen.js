import React,{useState} from 'react'
import { View,StyleSheet,Dimensions } from 'react-native'
import { Text,Image,Input,Button } from 'react-native-elements'

const loginScreen = ({navigation}) => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState(""); 
  
    return (
        <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
                {/* <Text h4 style={{marginLeft:10,marginBottom:20,textAlign:'center'}}>Login to your account</Text> */}
                <Input placeholder='Email / Username'/>
                <Input secureTextEntry={true} placeholder='Password'/>
                <Button title="Login" buttonStyle={{marginLeft:10,marginRight:10,backgroundColor:'green',borderRadius:30}}/>
                <Text style={{color:'green',textAlign:'center',marginTop:25}} onPress={()=>{navigation.navigate('register')}}>New user? Register here</Text>
            </View>
            <Image style={{width:Dimensions.get('window').width,height:300,resizeMode:'contain'}} source={require('../assets/login.jpg')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        backgroundColor:'#fff'
    },
    formContainer:{
        height:340,
        paddingTop:50,
        paddingHorizontal:30
    }
})

export default loginScreen
