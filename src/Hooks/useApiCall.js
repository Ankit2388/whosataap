import React, { useEffect, useState } from 'react';
import { GET } from "../Config/URLs";
import useAuth from "./useAuth";
import { my_axios } from "../http-common";

export default (
    {
        initial_method = GET,
        initial_params = {},
        initial_data = {},
        headers = {},
        navigation = false,
    } = {} ) => {
    const [{ authed }, { doLogout }] = useAuth();
    const [data, setData] = useState(initial_data);
    const [url, setUrl] = useState(null);
    const [method, setMethod] = useState(initial_method);
    const [params, setParams] = useState(initial_params);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [_callback, set_callback] = useState(false);

    const fetchData = async () => {

        setError({});
        setLoading(true);

        try {
            const data = await my_axios(url, { headers, params, method });

            setData(data);
        } catch ({ response = {} }) {
            setData({});
            setError(response);

            if (response && response.status == 401) {
                doLogout()

                navigation && navigation.push('Login');
            }
        }

        setLoading(false);
    };

    useEffect(() => {
        console.log({ url, params, _callback });
        if (url) {
            fetchData().then();
        }
    }, [params]);

    const doCall = ( url, { params: new_params = {}, method = GET } = {} ) => {
        setUrl(url)
        setMethod(method)
        setParams(new_params);
    }

    return [{ response: data, data, loading, error }, doCall];
};
