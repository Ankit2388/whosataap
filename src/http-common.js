import axios from 'axios';
import { API_URL, GET } from "./Config/URLs";
import AsyncStorage from "@react-native-community/async-storage";
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "./Config/Settings";

export const my_axios = async ( url, { headers = {}, params = {}, method = GET } = {} ) => {
    const config = {
        url,
        baseURL: API_URL,

        // TODO ::  this should be config
        timeout: 10000,

        headers: {
            "content-type": 'application/json',
            // TODO ::  this should be config
            ClientId: OAUTH_CLIENT_ID,
            ClientSecret: OAUTH_CLIENT_SECRET,
            ...headers,
        },

        method,

        [method == GET ? 'params' : 'data']: params,
    };

    const auth_token = await AsyncStorage.getItem('@whosat.login.access_token');
    // if auth then set the token
    if (auth_token) {
        config.headers['Authorization'] = `Bearer ${auth_token}`;
    }

    return axios(config)
        .then(( { data = {} } ) => data);
}
