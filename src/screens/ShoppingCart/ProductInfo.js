/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOURS, Items } from '../../components/database/images/Database'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array)); 
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };


  const renderProduct = ({ item, index }) => {
    return (
      <View style={{
        width: width,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image source={item} style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain'
        }} />
      </View>
    )
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      position: 'relative'
    }}>
      <ScrollView>
        <View style={{
          width: '100%',
          backgroundColor: '#fff',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: 'relative',
          justifyContent: 'center',
          marginBottom: 4

        }}>
          <View style={{
            width: "100%",
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingLeft: 16
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <AntDesign
                name='left'
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 12,
                  backgroundColor: COLOURS.backgroundLight,
                  borderRadius: 10
                }} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {product.productImageList ?
              product.productImageList.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp'
                })
                return (
                  <Animated.View
                    key={index}
                    style={{
                      width: '10%',
                      height: 2.4,
                      backgroundColor: '#000',
                      opacity,
                      marginHorizontal: 4,
                      borderRadius: 100
                    }}>
                  </Animated.View>
                )
              }) : null}
          </View>
        </View>
        <View style={{
          paddingHorizontal: 16,
          marginTop: 6
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 14
          }}>
            <AntDesign name='shoppingcart' style={{
              fontSize: 18,
              color: COLOURS.blue,
              marginRight: 6
            }} />
            <Text style={{
              fontSize: 12,
              color: COLOURS.black
            }}>Shopping</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginVertical: 4,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              letterSpacing: 1,
              marginVertical: 4,
              color: COLOURS.black,
              maxWidth: '84%'
            }}>
              {product.productName}
            </Text>
            <Entypo name='link' style={{
              fontSize: 24,
              color: COLOURS.blue,
              padding: 10,
              backgroundColor: COLOURS.blue + 10,
              borderRadius: 100
            }} />
          </View>
          <Text style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '400',
            letterSpacing: 1,
            opacity: 0.5,
            lineHeight: 20,
            maxHeight: 44,
            marginBottom: 10
          }}>
            {product.description}
          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 14,
            borderBottomColor: COLOURS.backgroundLight,
            borderBottomWidth: 1,
            paddingBottom: 20
          }}>
            <View style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{
                color: COLOURS.blue,
                backgroundColor: COLOURS.backgroundLight,
                alignItems: 'center',
                padding: 12,
                borderRadius: 100,
                marginRight: 10
              }}>
                <Entypo name='location-pin' style={{
                  fontSize: 16,
                  color: COLOURS.blue,
                }} />
              </View>
              <Text>No. 62 Hoa Cau Street, Ward 7,{'\n'} Phu Nhuan District, Ho Chi Minh City</Text>
            </View>
            <Entypo name='chevron-right' style={{
              fontSize: 22,
              color: COLOURS.backgroundDark
            }} />
          </View>
          <View style={{
            paddingHorizontal: 16
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '500',
              maxWidth: '85%',
              color: COLOURS.black,
              marginBottom: 4
            }}>
              $ {product.productPrice}.00
            </Text>
            <Text>
              Tax Rate 2% - ${product.productPrice / 20}
              {product.productPrice + product.productPrice / 20}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{
        position: 'absolute',
        bottom: 10,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={() => product.isAvailable ? addToCart(product.id) : null}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: 1,
            color: '#FFF',
            textTransform: 'uppercase'
          }}>
            {product.isAvailable ? "Add to Cart" : "Not Available"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductInfo