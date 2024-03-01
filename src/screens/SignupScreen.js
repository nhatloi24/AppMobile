/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { Colors, Images, Fonts, Generals } from '../contants';
import {WelcomeCart, Separator, ToggleButton} from '../components';
import { Display } from '../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useAuth from '../hook/useAuth';

const SignupScreen = ({navigation}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {handleRegister} = useAuth();

    const onSuccess = userData => {
        navigation.navigate('SigninScreen', {registeredEmail: userData?.email})
    };

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
              <Text style={styles.headerTitle}>Sign Up</Text>
          </View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.content}>Enter your Name, Email, Password for sign up. Already have Account?</Text>
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <AntDesign
                      name='user'
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                  />
                  <TextInput
                      value={name}
                      onChangeText={setName}
                      placeholder='Username'
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                  />
              </View>
          </View>
          <Separator height={15} />
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <AntDesign
                      name='mail'
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                  />
                  <TextInput
                      value={email}
                      onChangeText={setEmail}
                      placeholder='Email address'
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                  />
              </View>
          </View>
          <Separator height={15} />
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <AntDesign
                      name='lock'
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                  />
                  <TextInput
                      value={password}
                      onChangeText={setPassword}
                      placeholder='Password'
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      secureTextEntry={isPasswordShow ? false : true}
                  />
                  <FontAwesome
                      name={isPasswordShow ? 'eye' : 'eye-slash'}
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                  />
              </View>
          </View>
          <Separator height={15} />
          <TouchableOpacity 
            style={styles.signinButton}
            onPress={() => handleRegister(email, password, name, onSuccess)}
            >
              <Text style={styles.signinButtonText}>Create Account</Text>
          </TouchableOpacity>
          <Separator height={20} />
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.facebookButton}>
              <View style={styles.socialButtonContainer}>
                  <View style={styles.siginButtonLogoContainer}>
                      <Image source={Images.FACEBOOK} style={styles.siginButtonLogo} />
                  </View>
                  <Text style={styles.SocialSigninButtonText}>Connect with Facebook</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
              <View style={styles.socialButtonContainer}>
                  <View style={styles.siginButtonLogoContainer}>
                      <Image source={Images.GOOGLE} style={styles.siginButtonLogo} />
                  </View>
                  <Text style={styles.SocialSigninButtonText}>Connect with Google</Text>
              </View>
          </TouchableOpacity>

      </View>
  )
}

export default SignupScreen

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
    inputText: {
        fontSize: 16,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1
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
    orText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        alignSelf: 'center'
    },
    facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    siginButtonLogo: {
        height: 18,
        width: 18
    },
    siginButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 20
    },
    socialButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    SocialSigninButtonText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
})