/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {COLOURS, Items} from '../../components/database/images/Database'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

  const [products, setProducts] = useState([])
  const [accessory, setAccessory] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  });

  const getData =  () => {
    try {
       AsyncStorage.getItem('UserName')
      .then(value => {
        if (value !== null) {
          setName(value)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubcribe = navigation.addListener('focus', () =>{
      getDatafromDb()
    })
    return unsubcribe
  }, [navigation])

  const getDatafromDb = () => {
    let productList = []
    let accessoryList = []
    for (let index = 0; index < Items.length; index++ ) {
      if(Items[index].category =="product") {
        productList.push(Items[index])
      } else if (Items[index].category=="accessory"){
        accessoryList.push(Items[index])
      }
    }

    setProducts(productList)
    setAccessory(accessoryList)
  }

  const ProductCard =  ({data}) => {
    return [
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.navigate("ProductInfo", {productID:data.id})}
        style={{
          width: '40%',
          marginVertical: 14,
        }}>
        <View style={{
          width: '100%',
          height: 100,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#dcdcdc',
          backgroundColor: '#FFF',
          position: 'relative',
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: 8
        }}>
          {
            data.isOff ? (
              <View style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: 'green',
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: 12,
                  color: '#FFF',
                  fontWeight: 'bold',
                  letterSpacing: 1
                }}>{data.offPercentage}</Text>
              </View>
            ) : null
          }
          <Image source={data.productImage} style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain'
          }} />
        </View>
        <Text style={{
          fontSize: 12,
          color: '#000',
          fontWeight: '600',
          marginBottom: 2
        }}>
          {data.productName}
        </Text>
        {data.category =="accessory" ? data.isAvailable  ? (
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <FontAwesome name='circle' style={{
              fontSize: 12,
              marginRight: 6,
              color: 'green'
            }} />
            <Text style={{
              fontSize: 12,
              color: 'green'
            }}>
              Available
            </Text>
          </View>
        ) :(
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <FontAwesome name='circle' style={{
              fontSize: 12,
              marginRight: 6,
              color: 'red'
            }} />
            <Text style={{
              fontSize: 12,
              color: 'red'
            }}>
              Unavailable
            </Text>
          </View>
        ) : null}
        <Text>$ {data.productPrice}</Text>
      </TouchableOpacity>
    ]
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#FFF'
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16
        }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('InforUser')}
            >
            <AntDesign
              name="infocirlce"
              style={{
                fontSize: 18,
                color: '#B9B9B9',
                padding: 12,
                borderRadius: 10,
                backgroundColor: '#F0F0F3'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <AntDesign
              name="shoppingcart"
              style={{
                fontSize: 18,
                color: '#B9B9B9',
                padding: 12,
                borderRadius: 10,
                backgroundColor: '#F0F0F3'
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          marginBottom: 10,
          padding: 16
        }}>
          <Text style={{
            fontSize: 22,
            color: "#000",
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 10

          }}>Welcome {name} to Sound-Chill Shop & Services</Text>
          <Text style={{
            color: "#000",
            letterSpacing: 1,
            lineHeight: 24

          }}>Sound-Chill wants to bring beautiful, quality products along with new stories and experiences to its customers with the best service.</Text>
        </View>
        <View style={{
          padding: 16
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 18,
                color: '#000',
                letterSpacing: 1,
                fontWeight: '500'
              }}>Products</Text>
              <Text style={{
                color: '#000',
                letterSpacing: 1,
                fontWeight: '400',
                opacity: 0.5,
                marginLeft: 10
              }}>41</Text>
            </View>
            <Text style={{
              fontSize: 14,
              color: 'blue',
              fontWeight: '400'
            }}>SeeAll</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}>
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />
            })}
          </View>
        </View>

        <View style={{
          padding: 16
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 18,
                color: '#000',
                letterSpacing: 1,
                fontWeight: '500'
              }}>Accessories</Text>
              <Text style={{
                color: '#000',
                letterSpacing: 1,
                fontWeight: '400',
                opacity: 0.5,
                marginLeft: 10
              }}>78</Text>
            </View>
            <Text style={{
              fontSize: 14,
              color: 'blue',
              fontWeight: '400'
            }}>SeeAll</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}>
            {accessory.map((data) => {
              return <ProductCard data={data} key={data.id} />
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home