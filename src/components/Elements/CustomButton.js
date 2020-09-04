import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../Config/Colors";

/**
 * Base button for the application
 * @param title
 * @param style
 * @param textStyle
 * @param onPress
 * @returns {JSX.Element}
 * @constructor
 */
export const CustomButton = ( { title = "Enter", style = {}, textStyle = {}, onPress } ) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

export const ConfirmButton = ( { onPress, style = {} } ) => {
    return (
        <CustomButton
            style={[style, styles.confirmBtnStyle]}
            title="CONFIRM"
            onPress={onPress}
        />
    );
};

/**
 * shows the custom button with a border radius applied
 * @param onPress
 * @param otherProps
 * @returns {JSX.Element}
 * @constructor
 */
export const RadiusButton = ({ onPress, ...otherProps }) => (
    <CustomButton
        style={styles.radiusButton}
        onPress={onPress}
        {...otherProps}
    />
)

export const LargeBtn = ( props ) => {
    // <CustomButton
    //     style={styles.largeBtn}
    //     onPress={onPress}
    //     {...otherProps}
    // />
    const {btnHandler, title} = props
    return (
    <TouchableOpacity onPress={btnHandler} style={[styles.largeBtn]}>
        <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
    )
}

export const BackButton = (   { onPress, ...otherProps }  ) => (
    <CustomButton
        style={styles.backBtnStyle}
        textStyle={{
            color: Colors.buttonColor,
        }}
        title="BACK"
        onPress={onPress}
    />
);

const styles = StyleSheet.create({
    confirmBtnStyle: {
        marginTop: 40,
        marginHorizontal: 10,
        borderRadius: 25,
        elevation: 5,
    },

    radiusButton: {
        borderRadius: 25,
        elevation: 5,
    },

    backBtnStyle: {
        backgroundColor: "transparent",
    },

    largeBtn : {
        width : '100%',
        height: 50,
        borderRadius: 25,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",        
        backgroundColor: Colors.buttonColor,
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 5,
    },

    button: {
        display: "flex",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:20,
        backgroundColor: Colors.buttonColor,
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 5,
    },

    text: {
        fontSize: 16,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
});
