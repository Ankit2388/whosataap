import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default ( { children } ) => {
    return (
        <SafeAreaView style={PageContainerStyles.container}>
            {children}
        </SafeAreaView>
    )
}

export const PageContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        top: -10,
    },
});
