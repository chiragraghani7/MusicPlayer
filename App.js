import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      fontLoaded:false
    };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'fira-regular': require("./assets/fonts/fira-sans/Fira_Sans/FiraSans-Regular.ttf")
    });

    this.setState({
      fontLoaded:true
    });
  }

  render(){
    if(this.state.fontLoaded){
      return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            <AppNavigator />
          </View>
      );
    }
    return null;
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
