/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Alert, ImageBackground} from 'react-native';
import { Colors, Images, Fonts, Generals } from '../contants';
import { Display } from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLOURS } from '../components/database/images/Database';
import {WelcomeCart, Separator, ToggleButton} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = {uri: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/415102166_683014477335618_2450701921444389945_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=zmtnHeslc1EAX8uX_sh&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfB1224nwjkeEIEdoset1hMBwn0tj6fG0-2R0Qki3qhJXQ&oe=65A1B1BA'}

const InforUser = ({navigation}) => {

    const [name, setName] = useState('');
    const setData = async () => {
        if (name.length === 0) {
            Alert.alert('Warning!', 'Please write your name')
        } else {
            try {
                await AsyncStorage.setItem('UserName', name);
                navigation.navigate('Home')
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
      <View style={styles.container}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={COLOURS.backgroundLight}
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.headerContainer}>
              <AntDesign
                  name='left'
                  size={25}
                  color={Colors.DARK_FOUR}
                  onPress={() => navigation.goBack('SigninScreen')} />
              <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <View>
              <ImageBackground
                  source={image}
                  style={styles.images}
                  resizeMode='contain'
              >
                  <Entypo
                      name='camera'
                      size={20}
                      color={COLOURS.white}
                      style={styles.avatar}
                  />
              </ImageBackground>
          </View>

          <View>
              <TextInput
                  style={styles.input}
                  placeholder='Enter your name'
                //   onChangeText={(value) => setName(value)}
              />
          </View>
          <TouchableOpacity
              style={styles.signinButton}
            //   onPress={setData}
            onPress={() => navigation.navigate('Home')}
              >
              <Text style={styles.signinButtonText}>Let's go</Text>
          </TouchableOpacity>
      </View>
  )
}

export default InforUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight
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
    images: {
        width: 150,
        height: 150,
        margin: 100,
    },
    avatar: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
        borderRadius: 10,
        backgroundColor: COLOURS.white,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
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