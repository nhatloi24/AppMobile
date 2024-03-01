/* eslint-disable prettier/prettier */

import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from '../contants';


const DrawerSceneWrapper = ({children}) => {
    const progress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(()=>({
        transform: [
          {perspective: 1000},
          {scale: interpolate(progress.value, [0.4, 1.3], [1, 0.7], 'clamp')},
        ],
        borderRadius: 5,
        overflow: 'hidden',
    }))
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  )
}

export default DrawerSceneWrapper;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_ORANGE,
    }
})

