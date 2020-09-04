import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default ( props ) => {
    return (
        <TouchableOpacity
            style={[styles.imageContainer, { ...props.styles }]}
            {...props}
        >
            <Image style={styles.imageStyle} source={props.imageName}/>
        </TouchableOpacity>
    );
};

export const styles = StyleSheet.create({
    imageContainer: {
        height: 25,
        width: 25,
    },
    imageStyle: {
        resizeMode: "cover",
        height: "100%",
        width: "100%",
    },
});
