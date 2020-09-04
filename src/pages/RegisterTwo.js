import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import TextInput from "../components/Elements/Inputs/TextInput";
import Center from "../components/Center";
import { Link } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { mash_field } from "../Dictionary/Index";
import userService from "../services/userService";
import ic_splash from "../assets/images/ic_splash.png"
import ic_logo from "../assets/images/ic_logo_main.png"
import ic_facebook from "../assets/images/ic_facebook_white.png";
import ic_google from "../assets/images/ic_google_white.png";

export default ( { navigation } ) => {
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        register('email', {
            required: mash_field('required'),
            pattern: {
                value: /^((?!\.)[\w-_.+]*)(@[\w|-]+)(\.\w+(\.\w+)?[^.\W])$/,
                message: 'invalid email address'
            }
        });

        register('password', { required: mash_field('required') });
        register('password_confirmation', { required: mash_field('required') });
    }, [register]);

    const [loading, setLoading] = useState(false);
    const [registrationError, setRegistrationError] = useState(false);

    const handleRegister = async ( data, type = 'na' ) => {
        setRegistrationError(false)
        const { status = false } = await userService.register({
            ...data,
            registration_type: type
        }).catch({ status: false });

        if (status) {
            navigation.push('Login');
            return true;
        }

        setRegistrationError(true);
    };

    return (
        <SafeAreaView style={Styles.containerMain}>
            <ImageBackground source={ic_splash} style={Styles.backgroundImage}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Styles.container}>
                <Center>
                    <Image
                        source={ic_logo}
                        style={{
                            marginTop: 30,
                            width: 127,
                            height: 175,
                        }}
                    />
                </Center>

                {registrationError && <Text>
                    Error Registering
                </Text>}

                <TextInput
                    onChange={value => setValue('email', value)}
                    value={register.email}
                    label="Email"
                    errorMessage={errors.email && errors.email.message}
                />

                <TextInput
                    onChange={value => setValue('password', value)}
                    value={register.password}
                    secureTextEntry={true}
                    label="Password"
                    errorMessage={errors.password && errors.password.message}
                />

                <TextInput
                    onChange={value => setValue('password_confirmation', value)}
                    value={register.password_confirmation}
                    label="Confirm Password"
                    secureTextEntry={true}
                    errorMessage={errors.password_confirmation && "Confirm Password is required"}
                />

                {/*<Button*/}
                {/*    onPress={handleSubmit(data => handleRegister(data, 'system'))}*/}
                {/*    title="Register"*/}
                {/*    disabled={loading}*/}
                {/*/>*/}
                {/*<ButtonSocialMedia*/}
                {/*    onPress={handleSubmit(data => handleRegister(data, 'facebook'))}*/}
                {/*    title="Facebook"*/}
                {/*    icon="facebook-f"*/}
                {/*    disabled={loading}*/}
                {/*/>*/}

                {/*<ButtonSocialMedia*/}
                {/*    onPress={handleSubmit(data => handleRegister(data, 'google'))}*/}
                {/*    title="Google"*/}
                {/*    icon="google"*/}
                {/*    disabled={loading}*/}
                {/*/>*/}

                <View style={Styles.MainContainer}>
                    <TouchableOpacity
                        style={Styles.TextInputStyleClass}>
                        <Text style={Styles.TextStyle}>{"Register"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    marginStart: 16,
                    height: 40,
                    marginEnd: 16,
                    elevation: 10,
                    marginTop: 50
                }}>
                    <TouchableOpacity
                        style={{
                            textAlign: 'center',
                            height: 40,
                            borderWidth: 0,
                            borderColor: "#177EBE",
                            borderRadius: 25,
                            backgroundColor: "#177EBE",
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",
                        }}>
                        <Image style={{ width: 12, height: 23 }} source={ic_facebook}/>
                        <Text style={{
                            marginStart: 10,
                            textAlign: 'center',
                            justifyContent: "center", alignItems: "center",
                            fontSize: 16,
                            color: '#FFFFFF',
                        }}>{"Facebook"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    marginStart: 16,
                    height: 40,
                    marginEnd: 16,
                    elevation: 10,
                    marginTop: 16
                }}>
                    <TouchableOpacity
                        style={{
                            textAlign: 'center',
                            height: 40,
                            borderWidth: 0,
                            borderColor: "#C7290C",
                            backgroundColor: "#C7290C",
                            borderRadius: 25,
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center",
                        }}>
                        <Image style={{ width: 19, height: 19, }} source={ic_google}/>
                        <Text style={{
                            marginStart: 10,
                            textAlign: 'center',
                            justifyContent: "center", alignItems: "center",
                            fontSize: 16,
                            color: '#FFFFFF',
                        }}>{"Google"}</Text>
                    </TouchableOpacity>
                </View>

                <Center>
                    <Text style={Styles.loginText}>
                        Already have an account? <Link to="/Login" style={Styles.loginLink}>Login</Link>
                    </Text>
                </Center>
            </ScrollView>
        </SafeAreaView>

    )
}

const Styles = StyleSheet.create({

    containerMain: {
        flex: 1,
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position: 'absolute',
    },

    container: {
        marginHorizontal: 10,

        overflow: 'scroll',

        paddingBottom: 20,

        // flex: 1,
        // flexDirection: 'column',
        // padding: 30,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    loginText: {
        margin: 25
    },
    loginLink: {
        textDecorationLine: 'underline',
    },
    MainContainer: {
        justifyContent: 'center',
        marginStart: 16,
        height: 40,
        marginEnd: 16,
        elevation: 10,
        marginTop: 20

    },

    TextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center", alignItems: "center",
    },
    TextStyle: {
        textAlign: 'center',
        justifyContent: "center", alignItems: "center",
        fontSize: 16,
        color: '#FFFFFF',
    }
});
