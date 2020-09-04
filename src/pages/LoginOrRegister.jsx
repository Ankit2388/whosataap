import React, { useEffect } from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import Button from "../components/Elements/Button";
import ic_splash from "../assets/images/ic_splash.png"
import ic_logo from "../assets/images/ic_logo_main.png"
import useAuth from "../Hooks/useAuth";

export default ( { navigation } ) => {
    const [{ authed }, { setAuth }] = useAuth();

    useEffect(() => {
        if (authed) {
            navigation.push("Home");
        }
    }, [authed])

    /**
     * Links
     */
    const Login = () => navigation.push('Login');
    const Register = () => navigation.push('Register');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={ic_splash} style={styles.backgroundImage}/>
            <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 80 }}>
                    <Image source={ic_logo} style={{ width: 220, height: 275, }}/>
                </View>
            </View>
            <View style={{ height: 250, flexDirection: "column", }}>
                <View style={styles.MainContainer}>
                    <TouchableOpacity
                        onPress={Register}
                        style={styles.TextInputStyleClass}>
                        <Text style={styles.TextStyle}>{"Register"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MainContainer}>
                    <TouchableOpacity
                        onPress={Login}
                        style={styles.TextInputStyleClass}>
                        <Text style={styles.TextStyle}>{"Login"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        //  padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position: 'absolute',
    },

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginStart: 24,
        marginEnd: 24
    },

    TextInputStyleClass: {
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 20,

    },
    TextStyle: {
        marginTop: 10,
        textAlign: 'center',
        justifyContent: "center", alignItems: "center",
        fontSize: 16,
        color: '#FFFFFF',
    }
});
