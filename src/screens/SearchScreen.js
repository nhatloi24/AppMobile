/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator} from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import items from '../const/items'
import { spacing } from '../const/themes';
import MasonryList from '@react-native-seoul/masonry-list';


const {width} = Dimensions.get("screen")
const cardWidth = width/2 - 20

const SearchScreen = ({ navigation, route }) => {

    const [searchText, setSearchText] = useState('')
    const filteredFood = () => items.filter(eachFood => eachFood.name.toLowerCase()
        .includes(searchText.toLowerCase()))

    const Card = ({ food, index }) => {
        const even = index % 2 === 0;
        return (
            <View style={{
                paddingLeft: !even ? spacing.s/6 : 0,
                paddingRight: even ? spacing.l : 0,
                paddingBottom: spacing.l,
                paddingTop: index === 1 ? spacing.l : 0,
            }}>
            <TouchableOpacity style={styles.card}>
                <View style={{ alignItems: 'center', top: -40 }}>
                    <Image source={food.image} style={{ height: 120, width: 120 }} />
                </View>
                <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.DEFAULT_ORANGE }}>{food.price}</Text>
                </View>
            </TouchableOpacity>
            </View>
            )}

  return (
    <View style={{flex: 1, backgroundColor:'#ffffff'}}>
       <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_WHITE}
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.borderButton} onPress={() => navigation.goBack()} >
          <AntDesign name='left' size={25} color={'#000'} />
        </TouchableOpacity>
        <View style={{marginHorizontal: 10, marginTop: 2}}>
            <TextInput 
            onChangeText={(text) => {
                setSearchText(text)
            } }
            autoCorrect={false}
            style={{
                backgroundColor:'#EFEEEE',
                height: 40,
                width: 300,
                borderRadius: 30,
                paddingStart: 10
                }} />
        </View>
      </View>
              {filteredFood().length > 0 ? <MasonryList
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  data={filteredFood()}
                  renderItem={({ item, i }) => <Card food={item} index={i} />}
                  columnWrapperStyle={styles.columWrapper}
              /> : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name='search1' size={84} style={{marginBottom:20, color: '#C7C7C7'}} />
                <Text style={{color: '#000', fontSize: 28, fontFamily: Fonts.POPPINS_BOLD}}>Item not found</Text>
                <Text style={{fontSize: 17, fontWeight: '400', lineHeight: 17*1.2}}>Try searching the item with</Text>
                <Text style={{fontSize: 17, fontWeight: '400', lineHeight: 17*1.2}}>a different keyword.</Text>
                </View>}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    borderButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: '#EFEEEE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    columWrapper: {
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
})