import React from "react";
import { StyleSheet, View } from "react-native";

export default ( { children } ) => {
    return (
        <View style={styles.row}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 52,
        marginTop: 4,
    },
});
