import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
    const [authed, setAuthed] = useState(false);

    const doLogout = () => {
        const logoutProcess = async () => {
            await Promise.all([
                AsyncStorage.removeItem('@whosat.login.access_token'),
                AsyncStorage.removeItem('@whosat.login.token_type'),
                AsyncStorage.removeItem('@whosat.login.expires_at'),
            ])

            setAuthed(false);
        }

        logoutProcess().then();
    };

    const setAuth = ( access_token, token_type, expires_at ) => {
        const setAuthProcess = async () => {
            await Promise.all([
                AsyncStorage.setItem('@whosat.login.access_token', access_token),
                AsyncStorage.setItem('@whosat.login.token_type', token_type),
                AsyncStorage.setItem('@whosat.login.expires_at', expires_at),
            ]);

            setAuthed(true);
        }

        setAuthProcess().then();
    }

    useEffect(() => {
        const load = async () => {
            const result = await AsyncStorage.getItem('@whosat.login.access_token');

            setAuthed(!!result);
        };

        load().then();
    });

    return [{ authed }, { setAuth, doLogout }];
}
