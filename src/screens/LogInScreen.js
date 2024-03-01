/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LogInScreen = ({navigation, route}) => {
    const [email, setEmail] = useState('nhatloi@gmail.com');
    const [password, setPassword] = useState('123123');
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      <View style={{ flex: 1 }}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_WHITE}
              translucent
          />
          <View>
              <View style={{
                  height: 300,
                  width: '100%',
                  backgroundColor: '#FFF',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                  <Image source={Images.CHEF} style={{ width: 100, height: 100, tintColor: 'orange' }} />
                  <View 
                  style={{ 
                    flexDirection: 'row', 
                    position: 'absolute',
                    bottom: 0,
                     }}>
                      <TouchableOpacity style={{marginHorizontal: 50}}>
                          <Text style={{fontSize: 16, fontFamily: Fonts.POPPINS_EXTRA_BOLD}}>Login</Text>
                          <View style={{ height: 1, backgroundColor: Colors.DEFAULT_ORANGE, width: '100%', }} />
                      </TouchableOpacity>
                      <TouchableOpacity  style={{marginHorizontal: 50}} onPress={() => navigation.navigate('SignUp')} >
                          <Text style={{fontSize: 16, fontFamily: Fonts.POPPINS_EXTRA_BOLD}}>Sign-up</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          <Separator height={20} />
          <View style={{ margin: 15, marginLeft: 30 }}>
              <Text>Email address</Text>
          </View>
          <View style={{ marginLeft: 30 }}>
              <View style={styles.inputSubContainer}>
                  <AntDesign
                      name='mail'
                      size={22}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                  />
                  <TextInput
                      placeholder='example@gmail.com'
                      placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
                      value={email}
                      onChangeText={setEmail}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                  />
              </View>
              <Separator height={10} />
              <View style={{ height: 1, backgroundColor: '#000', width: '90%', }} />
          </View>
          <Separator height={20} />
          <View style={{ margin: 15, marginLeft: 30 }}>
              <Text>Password</Text>
          </View>
          <View style={{ marginLeft: 30 }}>
              <View style={styles.inputSubContainer}>
                  <AntDesign
                      name='lock1'
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 10 }}
                  />
                  <TextInput
                      placeholder='Enter your password'
                      placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
                      value={password}
                      onChangeText={setPassword}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      secureTextEntry ={isPasswordShow ? false : true}
                  />
                  <FontAwesome
                      name={isPasswordShow ? 'eye' : 'eye-slash'}
                      size={25}
                      color={Colors.DEFAULT_GREY}
                      style={{ marginRight: 40 }}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                  />
              </View>
              <Separator height={10} />
              <View style={{ height: 1, backgroundColor: '#000', width: '90%', }} />
          </View>
          <Separator height={20} />
          <View style={{marginLeft: 30 }} >
              <Text style={{color: Colors.DEFAULT_ORANGE, fontFamily: Fonts.POPPINS_BOLD }}>Forgot passcode?</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('DrawerNavigation') } >
            <Text style={styles.signinButtonText}>Login</Text>
          </TouchableOpacity>
          </View>
      </View>
  )
}

export default LogInScreen

const styles= StyleSheet.create({
    inputText: {
        fontSize: 16,
        textAlignVertical: 'center',
        padding: 0,
        color: Colors.DEFAULT_BLACK,
        flex: 1
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_ORANGE,
        borderRadius: 30,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        height: 60
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
})