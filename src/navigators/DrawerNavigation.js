/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../contants';
import { Profile, Offer, UpdateProfileScreen, Home } from '../screens';
import ButtonTab from './ButtonTab';
import useAuth from '../hook/useAuth';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = props => {
    const {navigation} = props;
    const {handleLogout} = useAuth();
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{height: '100%', width: '100%', marginBottom: 200, marginLeft: 10}} >
            <DrawerItemList {...props} />
            <DrawerItem 
                style={{marginTop: -20}}
                label={'Profile'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                }}
                icon={({color, size}) => 
                <FontAwesome name='user-circle-o' size={20} color={'#ffffff'} />
            }
            />
            <View style={styles.line}/>
            <DrawerItem 
                style={{marginTop: 20}}
                label={'offer and promo'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                }}
                icon={({color, size}) => 
                <FontAwesome name='tag' size={20} color={'#ffffff'} />
            }
            />
            <View style={styles.line}/>
            <DrawerItem 
                style={{marginTop: 20}}
                label={'orders'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                }}
                icon={({color, size}) => 
                <FontAwesome name='cart-arrow-down' size={20} color={'#ffffff'} />
            }
            />
            <View style={styles.line}/>
            <DrawerItem 
                style={{marginTop: 20}}
                label={'Privacy policy'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                }}
                icon={({color, size}) => 
                <FontAwesome name='sticky-note-o' size={20} color={'#ffffff'} />
            }
            />
            <View style={styles.line}/>
            <DrawerItem 
                style={{marginTop: 20}}
                label={'Security'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                }}
                icon={({color, size}) => 
                <FontAwesome name='exclamation-circle' size={20} color={'#ffffff'} />
            }
            />
            
            <DrawerItem 
                label={'Sign-out'}
                labelStyle={{
                    color: Colors.DEFAULT_WHITE,
                    fontSize: 16,
                    position: 'absolute',
                    marginVertical: -12,
                    marginLeft: -10
                    
                }}
                icon={({color, size}) => 
                <AntDesign name='logout' color={Colors.DEFAULT_WHITE} size={20} />
            }
            onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('LogInScreen');
                handleLogout();
            }}
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                flexDirection: 'row',
                width: 150,
                height: 50,
                marginBottom: 60
            }}
            />
        </DrawerContentScrollView>
    )
}
const DrawerNavigation = () => {
  return (
   <Drawer.Navigator 
   drawerContent={props => <CustomDrawerContent {...props} />}
   screenOptions={{
    drawerType: 'slide',
    headerShown: false,
    // drawerActiveBackgroundColor: Colors.DEFAULT_GREY,
    drawerActiveTintColor: Colors.DEFAULT_ORANGE,
    drawerInactiveTintColor: Colors.DEFAULT_WHITE,
    overlayColor: 'transparent',
    drawerStyle: {
        backgroundColor: Colors.DEFAULT_ORANGE,
        width: '60%',
    },
    sceneContainerStyle: {
        backgroundColor: Colors.DEFAULT_ORANGE
    },
    
}}
    >
        <Drawer.Screen name='ButtonTab' component={ButtonTab} options={{
        headerShown: false,
        drawerLabel: () => null
    }} />
     {/* <Drawer.Screen name='Profile' component={Profile} options={{
        headerShown: false,
        drawerLabel: 'Profile',
        drawerIcon: ({color, size}) => (
            <FontAwesome name='user-circle-o' size={30} color={'#ffffff'} />
        )
    }} 
    /> */}
    {/* <Drawer.Screen name='offer' component={Offer} options={{
        headerShown: false,
        drawerLabel: 'offer and promo',
        drawerIcon: ({color, size}) => (
            <FontAwesome name='tag' size={30} color={'#ffffff'} />
        )
    }} /> */}
    <Drawer.Screen name='UpdateProfileScreen' component={UpdateProfileScreen} options={{
        headerShown: false,
        drawerLabel: '',
    }} />
   </Drawer.Navigator>
  )
}

export default DrawerNavigation;

const styles = StyleSheet.create({
    line: {
        height: 1, 
        width: 140, 
        backgroundColor: Colors.DEFAULT_GREY, 
        margin: 20, 
        marginLeft: 70,
        marginVertical: 5
    },
    shadow: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 10,
        backgroundColor: 'rgba(0, 0, 0, 0,3)'
    }
})