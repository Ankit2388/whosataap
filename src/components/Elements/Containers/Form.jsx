import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { PageContainerStyles } from "./Page";


export default ( { children } ) => {
    return (
        <KeyboardAvoidingView
            behavior={typeof Platform != 'undefined' && Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={10}
            style={PageContainerStyles.container}>
            {children}
        </KeyboardAvoidingView>
    )
}
