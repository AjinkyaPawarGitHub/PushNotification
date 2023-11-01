/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import messaging from '@react-native-firebase/messaging'

function App(): JSX.Element {
  const getToken = async () =>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
      const token = await messaging().getToken();
      console.log({token})  
    }
    useEffect(()=>{
      getToken()

      // This code is for onscreen notification
      
      // const unsubscribe = messaging().onMessage(async remoteMessage => {
      //   Alert.alert('A new message arrived' , JSON.stringify(remoteMessage))})
      //   return unsubscribe;
    },[])
  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight:'bold' , fontSize:30}}>React Native Push Notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
