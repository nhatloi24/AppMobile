/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { Colors, Images, Fonts, Generals } from '../contants';
import {WelcomeCart, Separator, ToggleButton} from '../components';
import { Display } from '../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ForgotPassWordScreen = ({navigation}) => {
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
                  onPress={() => navigation.goBack('SigninScreen')} />
              <Text style={styles.headerTitle}>Forget Password</Text>
          </View>
          <Text style={styles.title}>Forget Password</Text>
          <Text style={styles.content}>Please enter Your Email so we can help you recover your password </Text>
          <Separator height={30} />
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <TextInput
                      placeholder='Enter your email'
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                  />
              </View>
          </View>
          <Separator height={15} />
          <TouchableOpacity style={styles.signinButton}>
              <Text style={styles.signinButtonText}>Reset Password</Text>
          </TouchableOpacity>
    </View>
  )
}

export default ForgotPassWordScreen

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
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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