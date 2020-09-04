import React from "react";
import { Alert } from "react-native";

export default () => {

    const baseAlert = ( { title = false, message = 'Something went wrong.', onPress = undefined } = {} ) => {
        Alert.alert(
            title,
            message,
            [
                { text: "OK", onPress }
            ],
            { cancelable: false }
        )
    }

    const generalError = () => {
        baseAlert({ message: 'General error occurred please try again.' })
    }

    const badAuth = ( { onPress = undefined } = {} ) => {
        baseAlert({ message: "Bad Email/ Password" });
    }

    const notFunctional = ( { onPress = undefined } = {} ) => {
        baseAlert({ message: "This feature is not functional yet." })
    }

    return [{ notFunctional, badAuth, generalError }];
}
