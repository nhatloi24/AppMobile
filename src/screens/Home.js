/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import {Separator, DrawerSceneWrapper} from '../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import categories from '../const/categories'
import foods from '../const/food'

const {width} = Dimensions.get("screen")
const cardWidth = width/2 -20

const Home = ({navigation}) => {

  const [selectedCategory, setSelectedCategory] = useState(0)
  const ListCategories = () => {
    return <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContaiter}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={() => setSelectedCategory(index)}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              fontSize: 18,
              color:
                selectedCategory == index
                  ? Colors.DEFAULT_ORANGE
                  : Colors.DEFAULT_GREY,
            }}>{category.name}</Text>
          </View>
          <View style={{
            backgroundColor:
              selectedCategory == index
                ? Colors.DEFAULT_ORANGE
                : Colors.DEFAULT_GREY,
            ...styles.categoryBtn
          }}>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  }

  const Card = ({data, index}) => {
    return <View>
       <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('DetailScreen', data)}
        >
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={data.image} style={{ height: 100, width: 100 }} />
          </View>
          <View style={{marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.name}</Text>
          </View>
          <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: Colors.DEFAULT_ORANGE}}>{data.price}</Text>
          </View>
        </TouchableOpacity>
    </View>
  }

  return (
      <View style={{ flex: 1, backgroundColor: Colors.DEFAULT_WHITE }}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.borderButton} onPress={() => navigation.openDrawer()} >
            <AntDesign name='menuunfold' size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.borderButton} onPress={() => navigation.navigate('CartScreen')}>
            <AntDesign name='shoppingcart' size={25} color={'#000'} />
          </TouchableOpacity>
        </View>

        <View style={{ margin: 30 }}>
          <Text style={styles.headerText}>Delicious</Text>
          <Text style={styles.headerText}>food for you</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchScreen')}
            style={{
              height: 50,
              width: 300,
              borderRadius: 30,
              backgroundColor: '#EFEEEE',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
            <AntDesign name='search1' size={20} color={'#000'} style={{ margin: 10 }} />
            <Text style={{ fontSize: 16 }}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ListCategories />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesListContaiter}>
          {foods.map(data => {
            return <Card data={data} key={data.id} />
          })}
        </ScrollView>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    margin: 20, 
    justifyContent: 'space-between'
  },
  borderButton: {
    height: 40, 
    width: 40, 
    borderRadius: 100, 
    backgroundColor: '#EFEEEE',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  headerText: {
    fontSize: 34,
    fontFamily: Fonts.POPPINS_EXTRA_BOLD,
    color: Colors.DEFAULT_BLACK,
    lineHeight: 34 * 1.4
  },
  categoriesListContaiter: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  categoryBtn: {
    height: 1,
    width: 80,
    marginRight: 20,
    borderRadius: 30,
    alignItems:'center',
    paddingHorizontal: 5,
    marginHorizontal: 20
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: -20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.DEFAULT_WHITE
  }
})