/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation, route}) => {
  return (
      <View style={{ flex: 1, }}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name='left' size={25} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>My Profile </Text>
              <View></View>
          </View>
          <StatusBar
              barStyle='dark-content'
              translucent
          />
          <Separator height={StatusBar.currentHeight} />

          <View style={styles.borderAddressInfo}>
              <View style={styles.addressTitle}>
                  <Text style={styles.addressText}>Infomation</Text>
              </View>
              <View style={styles.inforBorder}>
                <Image 
                    source={Images.AVATAR} 
                    style={{
                        height: 60, 
                        width: 60, 
                        borderRadius: 10, 
                        marginVertical:10,
                        marginHorizontal: 10
                        }} />
                <View style={{margin: 20,}}>
                    <Text style={styles.nameText}>Nhat Loi</Text>
                    <Text style={styles.infoText}>207c Nguyen Xi Binh Thanh Distric Ho Chi Minh city</Text>
                    <Text style={styles.phoneText}>nhxloi24@gmail.com</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('UpdateProfileScreen')} >
                    <Entypo name='pencil' size={20} style={{
                        position: 'absolute',
                        color: Colors.DEFAULT_BLACK,
                        top: -50,
                        left: -50
                    }} />
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.borderAddressInfo}>
              <View>
                  <Text style={styles.addressText}>Payment Method</Text>
              </View>
              <View style={styles.paymentBorder}>
                  <View style={{ margin: 20 }}>
                      <View style={{ flexDirection: 'row', marginHorizontal: -5, marginVertical: 5 }}>
                          <TouchableOpacity style={styles.borderPaymentBtn}></TouchableOpacity>
                          <View style={styles.borderCard}>
                              <Entypo name='credit-card' size={18} color={'#fff'} />
                          </View>
                          <Text style={styles.cardText}>Card</Text>
                      </View>
                      <View style={styles.line2} />
                      <View style={{ flexDirection: 'row', marginHorizontal: -5, marginVertical: 10 }}>
                          <TouchableOpacity style={styles.borderPaymentBtn}></TouchableOpacity>
                          <View style={styles.borderBank}>
                              <FontAwesome name='bank' size={18} color={'#fff'} />
                          </View>
                          <Text style={styles.bankText}>Bank account</Text>
                      </View>
                      <View style={styles.line2} />
                      <View style={{ flexDirection: 'row', marginHorizontal: -5, marginVertical: 10 }}>
                          <TouchableOpacity style={styles.borderPaymentBtn}></TouchableOpacity>
                          <View style={styles.borderPaypal}>
                              <Entypo name='paypal' size={18} color={'#fff'} />
                          </View>
                          <Text style={styles.bankText}>Paypal</Text>
                      </View>
                  </View>
              </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
              <TouchableOpacity style={styles.completeButtonCart}>
                  <Text style={styles.completeText}>Update</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default Profile;
const styles = StyleSheet.create({
    header: {
        margin: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_BLACK,
      color: Colors.DEFAULT_BLACK
    },
    payText: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: Fonts.POPPINS_REGULAR,
        color: Colors.DEFAULT_BLACK,
        lineHeight: 34 * 1.4
    },
    addressText: {
        fontSize: 16,
        color: Colors.DEFAULT_BLACK,
        fontWeight: '400',
        marginLeft: 10
    },
    borderAddressInfo: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    addressTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    editText: {
        color: Colors.DEFAULT_ORANGE ,
        fontWeight: '300',
        marginRight: 10
    },
    inforBorder: {
        height: 133,
        width: 320,
        borderRadius: 20,
        backgroundColor: Colors.DEFAULT_WHITE,
        margin: 10,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    paymentBorder: {
        height: 231,
        width: 320,
        borderRadius: 20,
        backgroundColor: Colors.DEFAULT_WHITE,
        margin: 10,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    line2: {
        height: 1, 
        width: 200 , 
        borderWidth: 0.5, 
        borderColor: Colors.DEFAULT_GREY,
        marginTop: 5,
        marginLeft: 40
    },
    borderBtn: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: Colors.DEFAULT_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.DEFAULT_ORANGE,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 15
    },
    nameText: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        marginLeft: 5
    },
    infoText: {
        fontSize: 13,
        fontWeight: '400',
        color: Colors.DEFAULT_BLACK,
        lineHeight: 15 * 1.4,
        width: 200,
        height: 40,
        margin: 5
    },
    phoneText: {
        width: 130,
        height: 18,
        fontSize: 13,
        fontWeight: '400',
        color: Colors.DEFAULT_BLACK,
        margin: 5
    },
    completeButtonCart: {
        height: 60,
        width: 300,
        borderRadius: 30,
        backgroundColor: Colors.DEFAULT_ORANGE,
        justifyContent: 'center',
        marginBottom: 20
      },
      completeText: {
        fontSize: 17,
        color: Colors.DEFAULT_WHITE,
        fontWeight: '600',
        lineHeight: 17 * 1.4,
        alignSelf: 'center'
    },
    borderPaymentBtn: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: Colors.DEFAULT_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.DEFAULT_ORANGE,
        borderWidth: 1,
        marginVertical: 15,
        marginHorizontal: 15
    },
    borderCard: {
        height: 40,
        width: 40,
        backgroundColor: '#F47B0A',
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    borderBank: {
        height: 40,
        width: 40,
        backgroundColor: '#EB4796',
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderPaypal: {
        height: 40,
        width: 40,
        backgroundColor: '#0038FF',
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        alignSelf: 'center',
        lineHeight: 17 * 1.4
    },
    bankText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        alignSelf: 'center',
        lineHeight: 17 * 1.4
    }
})