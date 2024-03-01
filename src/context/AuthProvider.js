/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { createContext, useCallback, useState } from 'react'
import axios from 'axios';
import LocalStorage from '../helpers/storage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = useCallback(async (_email, _password, isEnabled) => {
        setIsLoading(true);
        try {
            // const userJson = await fetch('https://store.kybuidev.com/api/v1/users/3')
            // const user = await userJson.json();
            // if (user) {
            //     if (user.email !== _email) {
            //         setError('Vui long nhap dung email');
            //         setIsLoading(false);
            //         return;
            //     }
            //     if (user.password !== _password) {
            //         setError('Vui long nhap dung password');
            //         setIsLoading(false);
            //         return;
            //     }
            //     setIsLoggedIn(true);
            //     setIsLoading(false);
            //     setError('');
            // }
            const respone = await axios.post('https://store.kybuidev.com/api/v1/auth/login', {
                email: _email,
                password: _password,
            });
            // console.log("respone:", respone);
            if (respone?.data?.access_token) {
                setIsLoggedIn(true);
                setIsLoading(false);
                setError('');
            }
            if (isEnabled) {
                LocalStorage.storeData('ACCESS_TOKEN', respone?.data?.access_token);
                LocalStorage.storeData('REFRESH_TOKEN', respone?.data?.access_token);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleRegister = async (_email, _password, _name, onSuccess) => {
       try {
        const res = await axios.post('https://store.kybuidev.com/api/v1/users', {
            name: _name,
            email: _email,
            password: _password,
            avatar: 'https://picsum.photos/800',
            role: 'customer',
        });
        // console.log('res', res);
        if (res?.status === 201) {
            onSuccess?.(res?.data);
        }
       } catch (err) {
        console.log(err);
       }
    };

    const handleLogout = useCallback(() => {
        LocalStorage.removeData('ACCESS_TOKEN')
        LocalStorage.removeData('REFRESH_TOKEN')
    }, [])

    const setLogin = useCallback((value) => {
        setIsLoggedIn(value)
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            isLoading,
            handleLogin,
            error,
            handleRegister,
            setLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider