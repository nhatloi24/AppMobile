/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';

const Order = ({navigation, route}) => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
        <View></View>
      </View>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
        <AntDesign name='shoppingcart' size={150} color={'#C7C7C7'}/>
        <Text style={styles.text1}>No orders yet</Text>
        <Text style={styles.text2}>Hit the orange button down</Text>
        <Text style={styles.text2}>below to Create an order</Text>
      </View>
      <View style={styles.orderBtn}>
        <TouchableOpacity style={styles.completeButtonCart}>
          <Text style={styles.completeText}>Start odering</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Order;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.DEFAULT_WHITE,

    },
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
      text1: {
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 28 * 1.2,
        color: Colors.DEFAULT_BLACK,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
      },
      text2: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 17 * 1.2,
        textAlign: 'center',
      },
      orderBtn: {
        justifyContent: 'center',
        alignItems: 'center', 
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
      },
      completeText: {
        fontSize: 17,
        color: Colors.DEFAULT_WHITE,
        fontWeight: '600',
        lineHeight: 17 * 1.4,
        alignSelf: 'center'
    },
    completeButtonCart: {
        height: 60,
        width: 300,
        borderRadius: 30,
        backgroundColor: Colors.DEFAULT_ORANGE,
        justifyContent: 'center',
        marginBottom: 20
      },
})