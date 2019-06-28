import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Icons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import * as Font from "expo-font";
import Colors from "./constants/Colors";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";

export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        fontLoaded: false
      };
    }

    async componentWillMount(){
     await Font.loadAsync({
       'fira-regular':require("./assets/fonts/fira-sans/Fira_Sans/FiraSans-Regular.ttf"),
        'fira-semibold' :require("./assets/fonts/fira-sans/Fira_Sans/FiraSans-SemiBold.ttf")
     });
     this.setState({
       fontLoaded:true
     });
    }

    render(){
      if(this.state.fontLoaded){
        return(
            <LinearGradient colors={[Colors.PrimaryGradientStart, Colors.PrimaryGradientEnd]}
                            start={[0,0]}
                            end={[1,1]}
                            style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle='light-content'/>}
                <AppNavigator/>
            </LinearGradient>


        );
      }
      return null;
    }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     paddingTop: responsiveHeight(4)
  },
});
