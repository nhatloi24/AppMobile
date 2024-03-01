/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {Fonts, Images } from '../contants';
import {Display} from '../utils';

const WelcomeCart = ({title, content, image}) => {
  return (
      <View style={styles.container}>
          <Image
              style={styles.image}
              source={Images[image]}
              resizeMode='contain' 
              />
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
      </View>
  )
}

export default WelcomeCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Display.setWidth(100)
        
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60)
    },
    titleText: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        color: "#fff"
    },
    contentText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20,
        color: '#fff'

    }
})