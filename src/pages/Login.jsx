import React, { useEffect, useState } from "react";
import { login } from '../actions/userActions';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import useAuth from "../Hooks/useAuth";

import { connect } from "react-redux";
import Input from "../components/Elements/Inputs/TextInput";
import Center from "../components/Center";
import ic_facebook from "../assets/images/ic_facebook.png";
import ic_google from "../assets/images/ic_google.png";
import useAlert from "../Hooks/useAlert";

const Login = ( { navigation, login } ) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [{ notFunctional, badAuth }] = useAlert();

    const [{ authed }] = useAuth();

    const [state, setState] = useState({
        email: "hokuneva@example.com",
        password: "password",
        hidePassword: true,
    });

    useEffect(() => {
        if (authed) {
            navigation.push("Home")
        }
    }, [authed]);


    const onChange = ( name, value ) => {
        setState({ ...state, [name]: value });
    };

    const onSubmit = async () => {
        await setLoading(true);
        await setError(false);

        try {
            await login({ ...state })
            navigation.push("Home");
        } catch (err) {
            badAuth();
            setError(true);
        }
        setLoading(false)
    };

    return (
        <ScrollView style={{
            marginHorizontal: 10,

            overflow: 'scroll',

            paddingBottom: 20
        }}>
            <Center>
                <Image
                    source={require("../assets/images/pin-color.png")}
                    style={{
                        marginTop: 10,
                        width: 127,
                        height: 175,
                    }}
                />
            </Center>

            <Input
                inputContainerStyle={{ marginStart: 16, marginEnd: 16 }}
                addShadow={true}
                label="     Email"
                value={state.email}
                onChange={( value ) => onChange("email", value)}
                errorMessage={!state.email ? "Required" : ""}
            />

            <Input
                inputContainerStyle={{ marginStart: 16, marginEnd: 16 }}
                addShadow={true}
                secureTextEntry={state.hidePassword}
                label="    Password"
                value={state.password}
                onChange={( value ) => onChange("password", value)}
            />

            <View
                style={{
                    height: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <Text style={{ paddingTop: 10, marginEnd: 30 }}>{"Forgot Password"}</Text>
            </View>
            <View>
                {error && <Center>
                    <Text>
                        Bad Email/ Password
                    </Text>
                </Center>}
            </View>
            <View style={styles.MainContainer}>
                <TouchableOpacity onPress={onSubmit} style={styles.TextInputStyleClass}>
                    <Text style={styles.TextStyle}>{loading ? "Loading" : "Login"}</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    justifyContent: "center",
                    marginStart: 24,
                    height: 40,
                    marginEnd: 24,
                    elevation: 10,
                    marginTop: 50,
                }}
            >
                <TouchableOpacity
                    onPress={notFunctional}
                    style={{
                        textAlign: "center",
                        height: 40,
                        borderWidth: 2,
                        borderColor: "#177EBE",
                        borderRadius: 25,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image style={{ width: 12, height: 23 }} source={ic_facebook}/>
                    <Text
                        style={{
                            marginStart: 10,
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 16,
                            color: "#177EBE",
                        }}
                    >
                        {"Facebook"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    justifyContent: "center",
                    marginStart: 24,
                    height: 40,
                    marginEnd: 24,
                    elevation: 10,
                    marginTop: 16,
                }}
            >
                <TouchableOpacity
                    onPress={notFunctional}
                    style={{
                        textAlign: "center",
                        height: 40,
                        borderWidth: 2,
                        borderColor: "#C7290C",
                        borderRadius: 25,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image style={{ width: 19, height: 19 }} source={ic_google}/>
                    <Text
                        style={{
                            marginStart: 10,
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 16,
                            color: "#C7290C",
                        }}
                    >
                        {"Google"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: "center",
        marginStart: 24,
        height: 40,
        marginEnd: 24,
        elevation: 10,
        marginTop: 20,
    },

    TextInputStyleClass: {
        textAlign: "center",
        height: 40,
        borderWidth: 0,
        borderColor: "#FFFFFF",
        borderRadius: 25,
        backgroundColor: "#1BC6E5",
    },
    TextStyle: {
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        color: "#FFFFFF",
    },

    loginText: {
        marginTop: 10,
    },
    loginLink: {
        textDecorationLine: "underline",
    },
});

const mapStateToProps = ( ) => ( {} );

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
