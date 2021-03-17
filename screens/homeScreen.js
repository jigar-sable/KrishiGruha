import React from 'react'
import { View,StyleSheet,Dimensions,ScrollView,Image,StatusBar,Button,TouchableOpacity} from 'react-native'
import { Text } from 'react-native-elements'


const homeScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{marginBottom:50,marginTop:7}}>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/Tomato.png')}/>
                    <View style={{paddingLeft:7}}>
                        <Text style={{fontSize:18,marginTop:15,textAlign:'center'}}>Tomato - Rs.50/kg</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('buy',{item:'Tomato',buyPrice:'50',path:require('../assets/Tomato.png')})}}>
                                <Text style={styles.buyBtn}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('sell',{item:'Tomato',sellingPrice:'40',path:require('../assets/Tomato.png')})}}>
                                <Text style={styles.sellBtn}>SELL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/Potato.png')}/>
                    <View style={{paddingLeft:7}}>
                        <Text style={{fontSize:18,marginTop:15,textAlign:'center'}}>Potato - Rs.30/kg</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('buy',{item:'Potato',buyPrice:'30',path:require('../assets/Potato.png')})}}>
                                <Text style={styles.buyBtn}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('sell',{item:'Potato',sellingPrice:'20',path:require('../assets/Potato.png')})}}>
                                <Text style={styles.sellBtn}>SELL</Text>
                            </TouchableOpacity>                     
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/Onions.png')}/>
                    <View style={{paddingLeft:7}}>
                        <Text style={{fontSize:18,marginTop:15,textAlign:'center'}}>Onion - Rs.30/kg</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('buy',{item:'Onion',buyPrice:'30',path:require('../assets/Onions.png')})}}>
                                <Text style={styles.buyBtn}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('sell',{item:'Onion',sellingPrice:'20',path:require('../assets/Onions.png')})}}>
                                <Text style={styles.sellBtn}>SELL</Text>
                            </TouchableOpacity>                
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/Rice.png')}/>
                    <View style={{paddingLeft:7}}>
                        <Text style={{fontSize:18,marginTop:15,textAlign:'center'}}>Rice - Rs.56/kg</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('buy',{item:'Rice',buyPrice:'56',path:require('../assets/Rice.png')})}}>
                                <Text style={styles.buyBtn}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('sell',{item:'Rice',sellingPrice:'46',path:require('../assets/Rice.png')})}}>
                                <Text style={styles.sellBtn}>SELL</Text>
                            </TouchableOpacity>            
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/Wheat.png')}/>
                    <View style={{paddingLeft:7}}>
                        <Text style={{fontSize:18,marginTop:15,textAlign:'center'}}>Wheat - Rs.35/kg</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('buy',{item:'Wheat',buyPrice:'35',path:require('../assets/Wheat.png')})}}>
                                <Text style={styles.buyBtn}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('sell',{item:'Wheat',sellingPrice:'25',path:require('../assets/Wheat.png')})}}>
                                <Text style={styles.sellBtn}>SELL</Text>
                            </TouchableOpacity>                
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
    },
    card:{
        height:300,
        width:Dimensions.get('window').width-30,
        borderWidth:1,
        borderRadius:30,
        borderColor:'gainsboro',
        margin:16,
        backgroundColor:'white',
        shadowOffset:{  width: 30,  height: 30},
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    buyBtn:{
        width:150,
        height:44,
        marginRight:13,
        borderColor:'#32a852',
        color:"#32a852",
        textAlign:'center',
        borderWidth:2,
        backgroundColor:'white',
        fontWeight:'bold',
        borderRadius:30,
        paddingTop:12
    },
    sellBtn:{
        width:150,
        height:44,
        marginRight:13,
        borderColor:'green',
        color:"green",
        textAlign:'center',
        borderWidth:2,
        backgroundColor:'white',
        fontWeight:'bold',
        borderRadius:30,
        paddingTop:12
    },
    cardImage:{
        height:200,
        marginTop:-8,
        width:Dimensions.get('window').width -32,
        resizeMode:'cover',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    }
})

export default homeScreen
