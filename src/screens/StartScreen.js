/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { Colors, Fonts, Generals, Images } from '../contants';

const StartScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_RED}
              translucent
          />
          <View>
              <View style={styles.iconBG}>
                  <Image source={Images.CHEF} style={{ height: 50, width: 50 }} />
              </View>
          </View>

          <View style={{justifyContent: 'flex-start', marginLeft: 40, margin: -20}}>
            <Text style={styles.textTitle}>FOOD FOR</Text>
            <Text style={styles.textTitle}>EVERYONE</Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>
            <Image source={Images.TOYFACE} style={{
                width: 280,
                height: 350
            }} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.gettingStartedButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('LogInScreen') }>
                <Text style={styles.gettingStartedButtonText}>Get started</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_RED
    },
    iconBG: {
        width: 73,
        height: 73,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 50,
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    textTitle: {
        fontSize: 50,
        fontFamily: Fonts.POPPINS_BLACK,
        color: '#fff',
        lineHeight: 58,
        letterSpacing: 1
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
        height: 60,
        width: 300
    },
    gettingStartedButtonText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD,
        letterSpacing: 1,
        color: Colors.DEFAULT_RED,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
})