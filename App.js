import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { YellowBox,Alert, Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as imagecapture from 'expo-image-picker';
import * as permission from 'expo-permissions';
import * as camera from 'expo-camera';
import { useState, useEffect } from 'react';

async function loadPermission(){
  try{
    const {granted} =  await permission.askAsync(permission.CAMERA,permission.AUDIO_RECORDING);
    if(granted){
      // To Do Code 
    }else{
        alert("please allow permissions");   
    }
  }catch(error){
      alert(error)
  }
  
}
export default function App() {

  useEffect(() => {
    YellowBox.ignoreWarnings(['Warning: ...']);
    console.disableYellowBox = true;
    loadPermission();
    }, [])
    
  return (
    <WebView
    mediaPlaybackRequiresUserAction={false} 
    style = {styles.container}
    javaScriptEnabled={true}
    source={{ uri: 'Enter low code url' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
