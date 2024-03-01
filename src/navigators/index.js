/* eslint-disable prettier/prettier */
import React, {useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    WelcomeScreen, 
    StartScreen,
    LogInScreen,
    SignUp,
    DetailScreen,
    CartScreen,
    SearchScreen,
    Checkout,
    CheckoutModal,
    Home,
    Order
    
} from "../screens";
import SplashScreen from 'react-native-splash-screen';
import ButtonTab from './ButtonTab';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const Navigators = () => {
    useEffect(() => SplashScreen.hide(), []);
    // const { isLoggedIn, setLogin } = useAuth();
    // const retrieveLoggedInData = useCallback(async () => {
    //     const data = await LocalStorage.getData('ACCESS_TOKEN');
    //     if (data) {
    //         setLogin(true);
    //     }
    // }, [setLogin])

    // useEffect(() => {
    //     retrieveLoggedInData();
    // }, [retrieveLoggedInData])

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WelcomeScreen'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                {/* <Stack.Screen name="ButtonTab" component={ButtonTab} /> */}
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="CheckoutModal" component={CheckoutModal} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )}
export default Navigators;