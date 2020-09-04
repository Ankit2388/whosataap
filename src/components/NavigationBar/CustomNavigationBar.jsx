import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ic_logo_main, Menu_Icon, NavigationBGIcon } from "../../assets";
import ImageButton from "../Elements/ImageButton";

export default ( props ) => {
    return (
        <ImageBackground
            style={{ ...styles.container, ...props.style }}
            source={NavigationBGIcon}
        >
            <ImageButton style={styles.menuImageStyle} imageName={Menu_Icon}/>
            <ImageButton style={styles.appIconImageStyle} imageName={ic_logo_main}/>
            {props.children}
        </ImageBackground>
    );
};

export const styles = StyleSheet.create({
    container: {
        top: 0,
        height: 106,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuImageStyle: {
        marginLeft: 20,
        marginTop: 55,
        height: 20,
        width: 30,
    },
    appIconImageStyle: {
        marginRight: 20,
        marginTop: 45,
        height: 35,
        width: 35,
    },
});
