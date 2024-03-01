/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useCart from '../hook/useCart';
import { SwipeListView } from 'react-native-swipe-list-view';

const CartScreen = ({navigation, route}) => {
  const {cartData, handleUpdateCartItem, handleRemoveFromcart} = useCart();

  const CartCard = ({item}) => {
    return <View style={styles.cartCard}>
      <Image source={item.image} style={{ height: 80, width: 80 }} />
      <View style={{
        height: 100,
        marginLeft: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1
      }}>
        <Text style={styles.nameFood}>{item.name}</Text>
        <Text style={styles.priceFood}>{item.price}</Text>
      </View>
      <View style={styles.actionView}>
        <View style={styles.actionBtn}>
          <TouchableOpacity onPress={() => handleUpdateCartItem(item.id, -1)}>
            <AntDesign name='minus' size={16} color={Colors.DEFAULT_WHITE} />
          </TouchableOpacity>
          <Text style={{ color: '#fff' }}> {item.quantity} </Text>
          <TouchableOpacity onPress={() => handleUpdateCartItem(item.id, 1)}>
            <AntDesign name='plus' size={16} color={Colors.DEFAULT_WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]){
      rowMap[rowKey].closeRow();
    }
  }

  const deleteRow = (id) => {
    handleRemoveFromcart(id);
  }

  const HiddenItemsWithAction = props => {
    const {onClose, onDelete} = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose} >
         <AntDesign name='hearto' size={18} color={Colors.DEFAULT_WHITE}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
          <FontAwesome name='trash-o' size={20} color={Colors.DEFAULT_WHITE}/>
        </TouchableOpacity>

      </View>
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemsWithAction
        data = {data}
        rowMap = {rowMap}
        onClose={() => closeRow(rowMap, data.item.id)}
        onDelete = {() => deleteRow(rowMap, data.item.id)}
      />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.DEFAULT_WHITE }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View></View>
      </View>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <SwipeListView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cartData}
        renderItem={CartCard}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-140}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <TouchableOpacity style={styles.completeButtonCart} onPress={() => navigation.navigate('Checkout')} >
          <Text style={styles.completeText}>Complete Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

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
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameFood: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    lineHeight: 18 * 1.4,
    paddingVertical: 5
  },
  priceFood: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_ORANGE
  },
  actionView: {
    marginRight: 20,
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: Colors.DEFAULT_ORANGE,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
rowBack: {
  alignItems: 'center',
  backgroundColor: Colors.DEFAULT_WHITE,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 25,
  margin: 12,
  marginBottom: 15,
  borderRadius: 5,
  marginRight: 30
},
backRightBtn: {
  alignItems: 'flex-end',
  bottom: 0,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  width: 75,
  paddingRight: 12,
},
backRightBtnLeft: {
  backgroundColor: 'red',
  right: 75,
  borderRadius: 50,
  height: 40,
  width: 40,
  marginTop: 25,
},
backRightBtnRight: {
  backgroundColor: 'red',
  right: 0,
  borderRadius: 50,
  height: 40,
  width: 40,
  marginTop: 25,
  marginEnd: 20
},
})