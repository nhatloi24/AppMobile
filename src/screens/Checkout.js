/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import foods from '../const/food'
import { RadioButton } from 'react-native-paper';
import useCart from '../hook/useCart';

const Checkout = ({navigation, route}) => {
  const [checked, setChecked] = useState('');
  const {cartData} = useCart();
  
  //get total price of all items in the cart
//   const getTotal = () => {
//     let total = 0;
//     cartData.forEach(item => {
//         total += item.price * item.quantity
//     });
//     return total;
//   };
const getTotal = () => {
    return cartData.reduce((total, item) => {
        return total + parseInt(item.price.replace(',', '')) * item.quantity
    }, 0)
}


  return (
      <View style={{ flex: 1, }}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name='left' size={25} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Check out </Text>
              <View></View>
          </View>
          <StatusBar
              barStyle='dark-content'
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={{ marginHorizontal: 30, marginTop: -20 }}>
              <Text style={styles.payText}>Delivery</Text>
          </View>
          <View style={styles.borderAddressInfo}>
              <View style={styles.addressTitle}>
                  <Text style={styles.addressText}>Address detail</Text>
                  <TouchableOpacity>
                      <Text style={styles.editText}>change</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.addressBorder}>
                <View style={{margin: 20,}}>
                    <Text style={styles.nameText}>Marvis Kparobo</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.infoText}>Km 5 refinery road oppsite republic road, effurun, delta state</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.phoneText}>+234 9011039271</Text>
                </View>
              </View>
          </View>
          <View style={styles.borderAddressInfo}>
              <View>
                  <Text style={styles.addressText}>Delivery Method</Text>
              </View>
              <View style={styles.addressBorder}>
                  <View style={{ margin: 30, alignSelf: 'center'}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton
                          value="DoorDeli"
                          status={checked === 'DoorDeli' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                          onPress={() => setChecked('DoorDeli')}
                          color = {Colors.DEFAULT_ORANGE} //when pressed, set the value of the checked Hook to 'Apple'
                      />
                      <Text style={styles.doorDeliText}>Door delivery</Text>
                      </View>
                      <View style={styles.line2}></View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton
                          value="Pickup"
                          status={checked === 'Pickup' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('Pickup')}
                          color = {Colors.DEFAULT_ORANGE}
                      />
                      <Text style={styles.pickupText}>Pick Up</Text>
                      </View>
                      {/* <Text>{checked}</Text> */}
                  </View>
              </View>
          </View>
          <View style={{flexDirection: 'row', margin: 40, justifyContent:'space-between'}}>
            <Text style={{
                fontSize: 17, 
                fontWeight: '400',
                lineHeight: 17*1.4,
                color: Colors.DEFAULT_BLACK
            }}>Total</Text>
            <Text style={{
                fontSize: 22, 
                fontWeight: '400',
                lineHeight: 17*1.4,
                color: Colors.DEFAULT_BLACK
            }}>{getTotal()}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity 
              style={styles.completeButtonCart} 
              onPress={() => navigation.navigate('CheckoutModal')} >
                  <Text style={styles.completeText}>Proceed to payment</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default Checkout;
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
        fontWeight: '600',
        fontFamily: Fonts.POPPINS_MEDIUM,
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
    addressBorder: {
        height: 155,
        width: 320,
        borderRadius: 20,
        backgroundColor: Colors.DEFAULT_WHITE,
        margin: 10,
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    line: {
        height: 1, 
        width: 250 , 
        borderWidth: 0.5, 
        borderColor: Colors.DEFAULT_GREY,
        marginTop: 5
    },
    line2: {
        height: 1, 
        width: 200 , 
        borderWidth: 0.5, 
        borderColor: Colors.DEFAULT_GREY,
        marginVertical: 10,
        marginLeft: 40,
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
        fontSize: 17,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK
    },
    infoText: {
        fontSize: 15,
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
        fontSize: 15,
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
    doorDeliText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
    },
    pickupText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
    }
})