import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {config} from './config'
import Main from './Screens/Main'
import firebase from 'firebase'
import {Router , Scene} from 'react-native-router-flux'

try{firebase.initializeApp(config)}catch(x){}

export default function App() {
  return (
    <Router>
    <Scene key="root">    
     
      <Scene
        key="Main"
        component={Main}
        title="Mystery App"
      />    

       {/* <Scene
        key="SignUp"
        component={StartRide}
        title="Sign Up"
      /> */}

      
      {/* <Scene
        key="SignUp"
        component={StartRide}
        title="Login"
      /> */}

    </Scene>

    



  </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafc',
    //#fff
    alignItems: 'center',
    justifyContent: 'center',
  },
});
