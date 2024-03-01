/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native'
import React, {useEffect, useState } from 'react'
import { COLOURS, Items } from '../../components/database/images/Database'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import useCart from '../../hook/useCart';


const MyCart = ({navigation, onUpdateCartItem}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);
  // const {handleUpdateCartItem} = useCart();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
    return unsubscribe;
  });

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };
  
  // remove selected data from Cart
  const removeItemsFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem('cartItems')
    itemArray = JSON.parse(itemArray)
    if (itemArray){
      let array = itemArray;
      for (let index = 0; index < array.length; index++){
        if(array[index] == id) {
          array.splice(index, 1)
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  }

  //check out
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems')
    } catch (error) {
      return error;
    }
    ToastAndroid.show('Item will be delivered soon!', ToastAndroid.SHORT)
    navigation.navigate('Home')
  }

  const renderProducts = (data, {item}) => {
    return (
      <TouchableOpacity
      key={data.key}
      onPress={() => navigation.navigate("ProductInfo", {productID:data.id})}
       style={{
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={{
          width: '30%',
          height: 100,
          padding: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={data.productImage} style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain'
          }} />
        </View>
        <View style={{
          flex: 1,
          height: '100%',
          justifyContent: 'space-around'
        }}>
          <View style={{}}>
            <Text style={{
              fontSize: 14,
              maxWidth: '100%',
              color: COLOURS.black,
              fontWeight: '600',
              letterSpacing: 1
            }}>
              {data.productName}
            </Text>
            <View style={{
              marginTop: 4,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                fontWeight: '400',
                maxWidth: '84%',
                marginRight: 4
              }}>
                ${data.productPrice}
              </Text>
              <Text>
                (${data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            marginHorizontal: 5,
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              // onPress={() => decreaseQuantity(item.id)}
              style={{
                borderRadius: 10,
                padding: 4,
                borderColor: COLOURS.backgroundMedium,
                opacity: 0.5
              }}>
              <AntDesign name='minuscircleo' style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                paddingLeft: 8
              }} />
            </TouchableOpacity>
            <Text style={{
              marginStart: 10,
              fontSize: 18
            }}>1</Text>
            <TouchableOpacity
              // onPress={() => increaseQuanlity(item.id)}
              style={{
                borderRadius: 10,
                marginRight: 20,
                padding: 4,
                borderColor: COLOURS.backgroundMedium,
                opacity: 0.5
              }}>
              <AntDesign name='pluscircleo' style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                paddingLeft: 7
              }} />
            </TouchableOpacity>
          </View>
          <View style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            marginRight: 20
            }}>
            <TouchableOpacity onPress={() => removeItemsFromCart(data.id)}>
            <FontAwesome name='trash-o' size={20} />
          </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#FFF',
      position: 'relative',
    }}>
    <ScrollView>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home') }>
        <AntDesign name='left' style={{
          fontSize: 18,
          color: COLOURS.backgroundDark,
          padding: 12,
          backgroundColor: COLOURS.backgroundLight,
          borderRadius: 12,
                  }} />
      </TouchableOpacity>
      <Text style={{
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '500',
      }}>Orders Details</Text>
      <View></View>
      </View>
      <Text style={{
        fontSize: 18,
        color: COLOURS.black,
        letterSpacing: 1,
        paddingTop: 20,
        paddingLeft: 16,
        fontWeight: 'bold',
        marginTop: 10
      }}>My Carts</Text>
      <View>
        {product ? product.map(renderProducts) : null}
      </View>
      <View>
        <View style={{
          paddingHorizontal: 16,
          marginVertical: 10
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 20,
            color: COLOURS.black
          }}>Deliver Location</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: COLOURS.backgroundLight,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                borderRadius: 10,
                marginRight: 18,
              }}>
                <FontAwesome name='location-arrow' size={20} color={COLOURS.blue} />
              </View>
              <View>
                <Text style={{
                  fontSize: 14,
                  color: "#000",
                  fontWeight: '500',
                  lineHeight: 20,
                  opacity: 0.5
                }}>207c Nguyen Xi, Binh Thanh, Ho Chi Minh</Text>
              </View>
            </View>
            <AntDesign name='right' size={20}/>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 16,
          marginVertical: 10
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 20,
            color: COLOURS.black
          }}>Payment Method</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: COLOURS.backgroundLight,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                borderRadius: 10,
                marginRight: 18,
              }}>
                <FontAwesome name='cc-visa' size={20} color={COLOURS.blue} />
              </View>
              <View>
                <Text style={{
                  color: COLOURS.black,
                  fontWeight: 'bold',
                  lineHeight: 20,
                  opacity: 0.5
                }}>VISA Classic</Text>
                <Text style={{
                  fontSize: 12,
                  color: "#000",
                  fontWeight: '400',
                  lineHeight: 20,
                  opacity: 0.5
                }}>0985886464</Text>
              </View>
            </View>
            <AntDesign name='right' size={20}/>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 16,
          marginTop: 40,
          marginBottom: 80
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 20,
            color: COLOURS.black
          }}>Order Info</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: '400',
              maxWidth: '80%',
              color: COLOURS.black
            }}>Subtotab</Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '400',
              color: COLOURS.black
            }}>${total}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: '400',
              maxWidth: '80%',
              color: COLOURS.black
            }}>Shipping Cost</Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '400',
              color: COLOURS.black
            }}>${total / 20}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: '400',
              maxWidth: '80%',
              color: COLOURS.black
            }}>Total</Text>
            <Text style={{
              fontSize: 20,
              fontWeight: '400',
              color: COLOURS.black
            }}>${total + total / 20}</Text>
          </View>
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
          onPress={() => (total != 0 ? checkOut() : null)}
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
           CHECKOUT (${total + total / 20})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCart