import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import Colors from "./constants/Colors";
import {StyleSheet} from "react-native";

export const styles= StyleSheet.create({
    controlContainer:{
        flex:1,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(6),
        alignItems:'center'
    },
    songContainer:{
        // alignSelf:'stretch',
        // alignItems:'center'
        flexDirection: 'row'
    },
    albumArt:{
        width:responsiveWidth(7),
        height:responsiveHeight(7),
        borderRadius: responsiveHeight(1),
        marginRight:responsiveWidth(5)
    },
    infoContainer:{
        justifyContent: 'center'
    },
    songTitle:{
        fontFamily:'fira-regular',
        color:Colors.headingColor,
        fontSize: responsiveFontSize(2.3),
        marginBottom:responsiveHeight(0.3),
    },
    albumText:{
        fontFamily:'fira-regular',
        color: Colors.geryColor,
        fontSize: responsiveFontSize(1.7)
    }


});