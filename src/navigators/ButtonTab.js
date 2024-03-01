/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {InforUser, HomeScreen, History, Home } from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../contants';
import { DrawerSceneWrapper } from '../components';

const Tab = createBottomTabNavigator();
const ButtonTab = () => {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                //   position: 'absolute',
                  right: 10,
                  bottom: 0,
                  elevation: 0,
                  height: 60,
              }
          }} >
            
          <Tab.Screen
              name='Home'
              component={Home}
              options={{
                  tabBarIcon: ({focused}) => (
                      <AntDesign 
                      name='home' 
                      color={focused ? Colors.DEFAULT_ORANGE : Colors.DEFAULT_GREY} 
                      size={25} />
                  )
              }}
          />
          <Tab.Screen
              name='History'
              component={History}
              options={{
                  tabBarIcon: ({focused}) => (
                      <AntDesign 
                      name='hearto' 
                      color={focused ? Colors.DEFAULT_ORANGE : Colors.DEFAULT_GREY} 
                      size={25} />
                  )
              }}
          />
          <Tab.Screen
              name='Favorite'
              component={InforUser}
              options={{
                  tabBarIcon: ({focused}) => (
                      <AntDesign 
                      name='user' 
                      color={focused ? Colors.DEFAULT_ORANGE : Colors.DEFAULT_GREY} 
                      size={25} />
                  )
              }}
          />
          <Tab.Screen
              name='Time'
              component={HomeScreen}
              options={{
                  tabBarIcon: ({focused}) => (
                      <AntDesign 
                      name='clockcircleo' 
                      color={focused ? Colors.DEFAULT_ORANGE : Colors.DEFAULT_GREY} 
                      size={25} />
                  )
              }}
          />
      </Tab.Navigator>
    </DrawerSceneWrapper>
  )
}

export default ButtonTab