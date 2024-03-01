/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect, useCallback} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Colors, Fonts } from '../contants';
import {Separator, FlatlishCarousel} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useCart from '../hook/useCart';

const DetailScreen = ({navigation, route}) => {
    const item = route.params;
    const width = Dimensions.get('window').width
    const {handleAddToCart} = useCart()

  return (
      <View style={{ flex: 1, backgroundColor: Colors.DEFAULT_WHITE }}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_WHITE}
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name='left' size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                  <AntDesign name='hearto' size={25} />
              </TouchableOpacity>
          </View>
          <FlatlishCarousel itemImageList = {item.foodImageList} />
          <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
              <View style={{ marginVertical: 50}}>
                  {/* <Image source={item.image} style={{ height: 200, width: 200 }} /> */}
                  <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.nameFood}>{item.name}</Text>
                      <Text style={styles.priceFood}>{item.price}</Text>
                  </View>
              </View>
              <View>
              <View style={{marginHorizontal: 20, marginBottom: 20}}>
                <Text style={styles.textTitle}>Delivery Info</Text>
                <Text style={styles.textSubTittle}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
            </View>

            <View style={{marginHorizontal: 20,}}>
                <Text style={styles.textTitle}>Return policy</Text>
                <Text style={styles.textSubTittle}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60, marginVertical: 20}}>
                <TouchableOpacity style={styles.addButtonCart} onPress={()=> {handleAddToCart(item)}} >
                    <Text style={styles.addText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
              </View>
          </View>
      </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    header: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameFood: {
        fontSize: 28,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        lineHeight: 28 * 1.4
    },
    priceFood: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: Fonts.POPPINS_REGULAR,
        color: Colors.DEFAULT_ORANGE
    },
    textTitle: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 17 * 1.4,
        color: Colors.DEFAULT_BLACK,
        paddingVertical: 5,
    },
    textSubTittle: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 15 * 1.4,
        flexWrap: 'wrap'
    },
    addButtonCart: {
        height: 60,
        width: 300,
        borderRadius: 30,
        backgroundColor: Colors.DEFAULT_ORANGE,
        justifyContent: 'center',
        marginTop: 20
    },
    addText: {
        fontSize: 17,
        color: Colors.DEFAULT_WHITE,
        fontWeight: '600',
        lineHeight: 17 * 1.4,
        alignSelf: 'center'
    }
})