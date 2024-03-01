/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput } from 'react-native';
import { Colors, Fonts } from '../contants';
import {Separator} from '../components';
import { Display } from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';


const PhoneRegister = ({navigation}) => {
  return (
      <View style={styles.container}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_WHITE}
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.headerContainer}>
              <AntDesign
                  name='left'
                  size={25}
                  onPress={() => navigation.goBack('SignupScreen')} />
              <Text style={styles.headerTitle}>Register Phone</Text>
          </View>
          <Text style={styles.title}>Enter your registered phone number to log in</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.countryListContainer}>
                <Image 
                    source={{uri: 'https://countryfacts.info/wp-content/uploads/2021/02/Vietnam_Flag-1024x768.png'}}
                    style={styles.flagIcon}
                 />
                <Text>+84</Text>
                <AntDesign name='caretdown' size={15}/>
            </TouchableOpacity>
            <View style={styles.phoneInputContainer}>
                <TextInput
                    placeholder='Phone number'
                    placeholderTextColor={Colors.DEFAULT_GREY}
                    selectionColor={Colors.DEFAULT_GREY}
                    keyboardType='number-pad'
                />
            </View>
          </View>
          <Separator height={30} />
          <TouchableOpacity 
            style={styles.signinButton}
            onPress={() => navigation.navigate('VerificationScreen')}
            >
              <Text style={styles.signinButtonText}>Continue</Text>
          </TouchableOpacity>
      </View>
  )
}

export default PhoneRegister

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
        color: '#000'
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    countryListContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        width: Display.setWidth(25),
        marginRight: 10,
        borderRadius: 8,
        height: Display.setHeight(6),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        flexDirection: 'row'

    },
    phoneInputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
        flex: 1
    },
    flagIcon: {
        height: 20,
        width: 30
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
})