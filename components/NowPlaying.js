import React , {Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default class NowPlaying extends Component{
    constructor(props){
        super(props);
        this.state = {
            progess:0.3
        }
    }

    render(){
        return (
            <LinearGradient
                colors={[Colors.accentGradientStart,Colors.accentGradientEnd]}
                start = {[0,0]}
                end = {[1,1]}
                style = {styles.NowPlayingContainer}>

                <View style = {[styles.progessBar,{width: responsiveWidth(this.state.progess*100)}]}/>

                <View style= {styles.controlContainer}>
                <View style = {styles.songContainer}>
                    <Image source = {{uri:"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/15/f1/bf/15f1bf30-54b7-e4a1-1a84-02cdc3b1fc2b/source/512x512bb.jpg"}}
                           style = {styles.albumArt}/>
                    <View style = {styles.infoContainer} >
                        <Text style = {styles.songTitle}>Song</Text>
                        <Text style = {styles.albumText}>Album</Text>
                    </View>
                </View>
                <MaterialIcons name = {'play-arrow'} color = {Colors.headingColor} size = {responsiveFontSize(6)} />
            </View>

            </LinearGradient>
        );
    }

}
const styles = StyleSheet.create({
    NowPlayingContainer:{
        height:responsiveHeight(10),

    },
    progressBar:{
        height:responsiveHeight(0.7),
        backgroundColor: Colors.headingColor,
        borderRadius:responsiveWidth(1)
},
controlContainer:{
    flex:1,
        alignSelf:'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
},
songContainer:{
    flexDirection: 'row',
},
albumArt:{
    width:responsiveHeight(7),
        height:responsiveHeight(7),
        borderRadius:responsiveHeight(1),
        marginRight:responsiveWidth(5)
},
infoContainer:{
    justifyContent:'center',
},
songTitle:{
    fontFamily:'fira-regular',
        color:Colors.headingColor,
        fontSize:responsiveFontSize(2.3),
        marginBottom:responsiveHeight(0.3),
},
albumText:{
    fontFamily:'fira-regular',
        color:Colors.greyColor,
        fontSize: responsiveFontSize(1.7)
}
});
