/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { Colors, Images, Fonts, Generals, CountryCode } from '../contants';
import {WelcomeCart, Separator} from '../components';
import { Display } from '../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VerificationScreen = ({navigation}) => {
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
                  onPress={() => navigation.goBack('PhoneRegister')} />
              <Text style={styles.headerTitle}>Verification</Text>
          </View>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.content}>Enter the OTP code from your phone</Text>
          <Text style={styles.content}>Did You Enter The Correct Number?</Text>
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' />
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' />
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' />
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' />
            </View>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.accountText}>Didn't receive SMS?</Text>
            <Text 
                style={styles.signupText} 
                onPress={() => navigation.navigate('PhoneRegister')} >Resend Code</Text>
          </View>
          <Separator height={30} />
          <TouchableOpacity 
            style={styles.signinButton}
            onPress={() => navigation.navigate('VerificationScreen')}
            >
              <Text style={styles.signinButtonText}>Verify</Text>
          </TouchableOpacity>
    </View>
  )
}

export default VerificationScreen;

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
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20
    },
    content: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_LIGHT,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    otpBox: {
        borderRadius: 5,
        borderColor: Colors.DEFAULT_GREEN,
        borderWidth: 0.5
    },
    otpText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10
    },
    signupContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row'
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5
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