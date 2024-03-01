/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Modal, Dimensions } from 'react-native';
import { Colors, Fonts } from '../contants';

const WIDTH = Dimensions.get('window').width
const FoodModal = (props, navigation, route) => {
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool)
    props.setData(data)
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        disabled={true}
        style={styles.container}
      >
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.textNote}>Please note</Text>
          </View>
          <View>
            <Text style={styles.textDeli}>Intra-city Delivery</Text>
            <Text style={styles.priceDeli}> N1000 - N2000</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.textDeli}>Out-of-town Delivery</Text>
            <Text style={styles.priceDeli}> N2000 - N3000</Text>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity 
              style={styles.actionBtn}
              onPress={() => closeModal(false, 'Cancel') }
            >
              <Text style={styles.actionText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionBtn}
              onPress={() => {
                closeModal(false, 'Cancel');
                // navigation.goBack()
                }
            }
            >
              <Text style={styles.actionText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FoodModal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    height: 320,
    width: 315,
    paddingTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 20
  },
  line: {
    height: 1,
    width: 250,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREY,
    marginTop: 10,
    alignSelf: 'center'
  },
  textDeli: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    marginHorizontal: 40,
    marginVertical: 10
  },
  priceDeli: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    marginHorizontal: 40,
    marginVertical: -5
    }, 
  btnView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
    height: 40,
    backgroundColor: Colors.DEFAULT_ORANGE,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  textView: {
    backgroundColor: '#EDEDED',
    height: 60,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 20,
  },
  actionText: {
    fontSize: 17, 
    fontWeight: '600',
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  textNote: {
    fontSize: 20,
    margin: 20,
    fontWeight: '500',
    lineHeight: 20 * 1.2,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_BLACK
  }
})