import React from "react";
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Page from "./Containers/Page";

export default ( { loading = false, children } ) => {
    return (
        <Page>
            <Spinner
                visible={loading}
                textContent="Loading . . ."
                textStyle={styles.spinnerTextStyle}
            />
            {children}
        </Page>
    )
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#000000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
