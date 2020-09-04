import userService from "../services/userService";
import { RESET_TOKEN, SET_TOKEN } from "./types";
import AsyncStorage from "@react-native-community/async-storage";

export const login = ({email, password}) => dispatch => new Promise(async (resolve, reject) => {
    try {
        const { data: { access_token, expires_at, token_type }, status } = await userService.login({ email, password });

        // Bad auth check
        if (status != 200) {
            throw "bad_auth";
        }

        dispatch({ type: SET_TOKEN, token: access_token });

        await Promise.all([
            AsyncStorage.setItem('@whosat.login.access_token', access_token),
            AsyncStorage.setItem('@whosat.login.token_type', token_type),
            AsyncStorage.setItem('@whosat.login.expires_at', expires_at),
        ]);

        resolve();
    } catch (err) {
        reject(err);
    }
});

export const me = () => dispatch => new Promise(async resolve => {
    const response = await userService.me();
    console.log("me", {response});
});

export const logout = () => dispatch => new Promise(async ( resolve ) => {
    dispatch({ type: RESET_TOKEN });

    try {
        await userService.logout();
    } catch (e) {
    }

    await Promise.all([
        AsyncStorage.removeItem('@whosat.login.access_token'),
        AsyncStorage.removeItem('@whosat.login.token_type'),
        AsyncStorage.removeItem('@whosat.login.expires_at'),
    ])
    resolve();
});
