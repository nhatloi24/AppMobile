/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, FlatList, TextInput, Alert, Switch } from 'react-native';
import { Colors, Images, Fonts, Generals } from '../contants';
import {Separator} from '../components';
import { Display } from '../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useAuth from '../hook/useAuth';
import { useRoute } from '@react-navigation/native';


const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const {handleLogin, error} = useAuth();
    const {params} = useRoute();

    useEffect(() => {
        if (error) {
            Alert.alert('Thong bao', error);
        }
    }, [error]);

    useEffect(() => {
        if (params?.registeredEmail){
            setEmail(params?.registeredEmail);
        }
    }, [params]);

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
                  onPress={() => navigation.goBack('')} />
            <Text style={styles.headerTitle}>Sign In</Text>
          </View>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.content}>Enter your username and password, and enjoy ordering food</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <AntDesign
                    name='user'
                    size={25}
                    color={Colors.DEFAULT_GREY}
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                      value={email}
                      onChangeText={setEmail}
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
                    secureTextEntry ={isPasswordShow ? false : true}
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
          <Text></Text>
          <View style={styles.forgotPasswordContainer}>
              <View style={styles.toggleContainer}>
                  <Switch
                      trackColor={{ false: Colors.DEFAULT_GREY, true: Colors.DEFAULT_GREEN }}
                      thumbColor={isEnabled ? Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                  />
                  <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <Text
                  style={styles.forgotPasswordText}
                  onPress={() => navigation.navigate('ForgotPass')}
              >Forget Password</Text>
          </View>
          <TouchableOpacity 
          style={styles.signinButton} 
          onPress={() => handleLogin(email, password, isEnabled)} >
            <Text style={styles.signinButtonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text 
                style={styles.signupText} 
                onPress={() => navigation.navigate('SignupScreen')} >Sign up</Text>
          </View>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.facebookButton}>
            <View style={styles.socialButtonContainer}>
                <View style={styles.siginButtonLogoContainer}>
                    <Image source={Images.FACEBOOK} style={styles.siginButtonLogo}/>
                </View>
                <Text style={styles.SocialSigninButtonText}>Connect with Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.socialButtonContainer}>
                <View  style={styles.siginButtonLogoContainer}>
                    <Image source={Images.GOOGLE} style={styles.siginButtonLogo}/>
                </View>
                <Text style={styles.SocialSigninButtonText}>Connect with Google</Text>
            </View>
          </TouchableOpacity>
      </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE
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
        fontSize: 18,
        fontFamily: Fonts.POPPINS_MEDIUM,
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
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1
    },
    forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rememberText: {
        fontSize: 12,
        marginLeft: 10,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD
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
        alignItems: 'center'
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})