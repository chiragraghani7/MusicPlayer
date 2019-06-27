import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {responsiveHeight,responsiveFontSize} from 'react-native-responsive-dimensions';
import Colors from "../constants/Colors";
import {MaterialIcons} from "@expo/vector-icons";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  
  tabBarIcon: ({ focused }) => (
    <MaterialIcons name={'music-note'} size={responsiveFontSize(5)} color={Colors.accentColor}/>
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name={'search'} size={responsiveFontSize(5)} color={Colors.accentColor}/>
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},{
    tabBarOptions: {
        showLabel: false,
        style:{
            backgroundColor: Colors.primaryColor,
            height: responsiveHeight(10)
        },
    }
});

tabNavigator.path = '';

export default tabNavigator;
