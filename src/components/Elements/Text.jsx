import React from "react";
import { StyleSheet, Text } from "react-native";

export default ( props ) => {
    return (
        <Text style={styles.textStyle} {...props}>
            {props.children}
        </Text>
    );
};

export const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
