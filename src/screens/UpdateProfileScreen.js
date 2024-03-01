/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UpdateProfileScreen = ({navigation, route}) => {
  return (
      <ScrollView style={{ flex: 1, }}>
            <StatusBar
              barStyle='dark-content'
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name='left' size={25} />
              </TouchableOpacity>
              <View></View>
          </View>
            <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 34, fontWeight: '600', fontFamily: Fonts.POPPINS_BOLD, color: Colors.DEFAULT_BLACK}}>My profile</Text>
            </View>
          <View style={styles.borderAddressInfo}>
              <View style={styles.addressTitle}>
                  <Text style={styles.addressText}>Personal Details</Text>
                  <Text>change</Text>
              </View>
              <View style={styles.inforBorder}>
                <Image 
                    source={Images.AVATAR} 
                    style={{
                        height: 100, 
                        width: 90, 
                        borderRadius: 10, 
                        marginHorizontal: 10,
                        marginBottom: 50
                        }} />
                <View style={{margin: 20,}}>
                    <Text style={styles.nameText}>Nhat Loi</Text>
                    <View style={styles.line2} />
                    <Text style={styles.infoText}>207c Nguyen Xi Binh Thanh Distric Ho Chi Minh city</Text>
                    <View style={styles.line2} />
                    <Text style={styles.phoneText}>nhxloi24@gmail.com</Text>
                    <View style={styles.line2} />
                    <Text style={styles.phoneText}>+98 5886464</Text>
                </View>
              </View>
          </View>
          <View style={{ marginHorizontal: 40, marginVertical: 20}}>
              <View style={styles.choiceBtn}>
                  <Text style={styles.choiceText}>Orders</Text>
                  <AntDesign name='right' size={20} style={{position: 'absolute', right: 0, marginRight: 10}} />
              </View>
              <View style={styles.choiceBtn}>
                  <Text style={styles.choiceText}>Pending reviews</Text>
                  <AntDesign name='right' size={20} style={{position: 'absolute', right: 0, marginRight: 10}} />
              </View>
              <View style={styles.choiceBtn}>
                  <Text style={styles.choiceText}>Faq</Text>
                  <AntDesign name='right' size={20} style={{position: 'absolute', right: 0, marginRight: 10}} />
              </View>
              <View style={styles.choiceBtn}>
                  <Text style={styles.choiceText}>Help</Text>
                  <AntDesign name='right' size={20} style={{position: 'absolute', right: 0, marginRight: 10}} />
              </View>
          </View>
          
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity style={styles.completeButtonCart}>
                  <Text style={styles.completeText}>Update</Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
  )
}

export default UpdateProfileScreen;
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 25,
        marginLeft: 10
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
        height: 190,
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
        width: 170 , 
        borderWidth: 0.5, 
        borderColor: Colors.DEFAULT_GREY,
        marginTop: 5,
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
    },
    choiceBtn: {
        width: 315, 
        height: 50, 
        flexDirection: 'row', 
        borderRadius: 20, 
        backgroundColor: Colors.DEFAULT_WHITE,
        alignItems: 'center',
        marginVertical: 10
    },
    choiceText: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 18 * 1.2,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        marginHorizontal: 20
    }
})