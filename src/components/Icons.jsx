import React from "react";
import { Clock_Icon } from "../assets";
import ImageButton from "./Elements/ImageButton";
import { StyleSheet } from "react-native";

export const CustomIcon = ( { imageName } ) => {
    return (
        <ImageButton
            style={styles.hereUntilIconStyle}
            imageName={Clock_Icon}
        />
    )
};

export const ClockIcon = () => {
    return (
        <CustomIcon
            imageName={Clock_Icon}
        />
    )
};

const styles = StyleSheet.create({
    hereUntilIconStyle: {
        height: 20,
        width: 20,
        marginLeft: 8,
        resizeMode: "center",
    },
});
