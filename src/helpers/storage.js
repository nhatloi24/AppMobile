/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";

// Luu du lieu vao AsyncStorage
const storeData = async (key, value) => {
    try {
        if (typeof value === 'string') {
            await AsyncStorage.setItem(key, value)
        } else {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.log('Store Data Error:',error);
    }
}
 //Lay du lieu vao Async Storage

 const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            if (typeof value === 'string') {
                return value;
            }
            return JSON.parse(value);
        } else {
            console.log('Data not dound for key' + key);
        }
    } catch (error) {
        console.log("Error retrieving data for key", error);
    }
 }

 const removeData = async (key, value) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Remove data error', error);
    }
 }

 const LocalStorage = {
    storeData,
    getData,
    removeData
 };

 export default LocalStorage;
