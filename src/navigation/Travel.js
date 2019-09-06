import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from '../screens/ListScreen';
import ArticleScreen from '../screens/ArticleScreen';

const TravelStack = createStackNavigator(
  {
    List: ListScreen,
    Article: ArticleScreen
  },
  {
    initialRouteName: 'List'
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     borderBottomColor: 'transparent',
    //     marginTop: 24,
    //     backgroundColor: 'green'
    //   }
    // }
  }
);

export default TravelStack;
