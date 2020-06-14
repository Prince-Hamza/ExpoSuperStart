import React, { Component } from 'react';
import {View , Text, TouchableOpacity} from 'react-native'
import {Styles , Colors} from '../Interface/Verstyle'
import {EmailSignUp,EmailLogin,GoogleLogin} from '../Features/FirebaseAuth'
import Button from '../Interface/Button'
import Space from '../Interface/Interface'


class Main extends React .Component {

 componentDidMount = () => {}


  render () {
  return (
   <View style = {Styles.Container} >

       <Text style =  { Styles.NiceText } >
           Awesome Mystery App
       </Text>


       <Space Pixel = {6} />

       <Button OnPress = {()=>{ EmailSignUp() }}   >
          Email Login
       </Button>

       <Space Pixel = {6} />

       <Button OnPress = {()=>{ EmailLogin() }}  >
          Email Sign Up
       </Button>

       <Space Pixel = {6} />

       <Button OnPress = {()=>{ GoogleLogin() }}   >
          Google Login
       </Button>

       <Space Pixel = {6} />

       <Button OnPress = {()=>{ alert("Develop") }}   >
         Messenger
       </Button>


      


   </View>
  );
}
}

export default Main



