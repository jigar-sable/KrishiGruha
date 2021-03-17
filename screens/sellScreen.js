import React from 'react'
import { View,Image,StyleSheet,Dimensions,ScrollView } from 'react-native'
import {Text,Input,Button} from 'react-native-elements'

const sellScreen = ({route,navigation}) => {
    const {item,sellingPrice,path} = route.params
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
            <Image style={styles.itemImage} source={path}/>
            <View style={styles.formContainer}>
                <Text style={{paddingLeft:10,paddingBottom:10,paddingTop:3}} h4>{item} - Rs.{sellingPrice} / kg</Text>
                <Input placeholder="Quantity in kg"/>
                <Input placeholder="Your Street location"/>
                <Input placeholder="Your City name"/>
                <Input placeholder="Your PIN code"/>
                <Input placeholder="Your Phone Number"/>
                <Button buttonStyle={{backgroundColor:'green',borderRadius:30,marginLeft:9,marginRight:9}} title="SELL"/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    itemImage:{
        width:Dimensions.get('window').width,
        height:200,
        resizeMode:'cover'
    },
    formContainer:{
        padding:15,
        backgroundColor:'white',
        paddingBottom:40
    }
})
export default sellScreen
