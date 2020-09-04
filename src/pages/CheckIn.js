import React, { useState } from "react";
import { connect } from 'react-redux';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Colors from "../Config/Colors";

const { width, height } = Dimensions.get('window');


const CheckIns = ( { navigation, events } ) => {

    const [state, setState] = useState({
        inputOne: '',
        inputTwo: '',
    });

    const Home = () => {
        navigation.push('Home');
    };

    const ProviderSuccess = () => {
        navigation.push('ProviderSuccess');
    };

    const onChange = ( name, value ) => {
        setState({ ...state, [name]: value });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                flexDirection: "row", marginTop: 30,
                fontSize: 20,
                marginStart: 8,
                justifyContent: "center",
                alignItems: "center",
            }}>{"Check-in @"}</Text>
            <TextInput
                style={{
                    borderWidth: 2,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    height: 40,
                    margin: 8
                }}
                placeholder=""
                onChangeText={value => onChange('inputOne', value)}
            >
            </TextInput>

            <Text style={{
                flexDirection: "row", marginTop: 30,
                fontSize: 20,
                marginStart: 8,
                justifyContent: "center",
                alignItems: "center",
            }}>{"Here Until:"}</Text>
            <View style={{ width: width, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }}>
                    <View style={{ flex: 1, height: 50, }}>
                        <TextInput
                            style={{
                                borderWidth: 2,  // size/width of the border
                                borderColor: 'lightgrey',  // color of the border
                                paddingLeft: 10,
                                height: 40,
                                margin: 8
                            }}
                            placeholder=""
                            onChangeText={value => onChange('inputOne', value)}
                        >
                        </TextInput>
                    </View>
                    <View style={{ flex: 1, height: 50 }}>
                        <TextInput
                            style={{
                                borderWidth: 2,  // size/width of the border
                                borderColor: 'lightgrey',  // color of the border
                                paddingLeft: 10,
                                height: 40,
                                margin: 8
                            }}
                            placeholder=""
                            onChangeText={value => onChange('inputOne', value)}
                        >
                        </TextInput>

                    </View>
                </View>
            </View>

            <Text style={{
                flexDirection: "row", marginTop: 30,
                fontSize: 20,
                marginStart: 8,
                justifyContent: "center",
                alignItems: "center",
            }}>{"What’s Up:"}</Text>
            <TextInput
                style={{
                    borderWidth: 2,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    margin: 8
                }}
                multiline={true}
                numberOfLines={6}
                placeholder=""
                onChangeText={value => onChange('inputTwo', value)}
            >
            </TextInput>


            <View style={{
                justifyContent: 'center',
                marginStart: 8,
                height: 40,
                marginEnd: 8,
                elevation: 16,
                marginTop: 50
            }}>
                <TouchableOpacity
                    style={{
                        textAlign: 'center',
                        height: 40,
                        borderWidth: 0,
                        borderColor: "#177EBE",
                        borderRadius: 25,
                        flexDirection: "row",
                        backgroundColor: "#1BC6E5",
                        justifyContent: "center", alignItems: "center",
                    }}
                    onPress={ProviderSuccess}
                >
                    <Text style={{
                        marginStart: 10,
                        textAlign: 'center',
                        justifyContent: "center", alignItems: "center",
                        fontSize: 16,
                        color: '#FFFFFF',
                    }}>{"Confirm"}</Text>
                </TouchableOpacity>
            </View>


            <View style={{
                justifyContent: 'center',
                marginStart: 8,
                height: 40,
                marginEnd: 8,
                elevation: 16,
                marginTop: 10
            }}>
                <TouchableOpacity
                    style={{
                        textAlign: 'center',
                        height: 40,
                        borderWidth: 0,
                        borderRadius: 25,
                        flexDirection: "row",
                        justifyContent: "center", alignItems: "center",
                    }}
                    onPress={Home}>
                    <Text style={{
                        marginStart: 10,
                        textAlign: 'center',
                        justifyContent: "center", alignItems: "center",
                        fontSize: 16,
                    }}>{"Back"}</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
};

const mapStateToProps = ( { events: { events = [] } = {} } ) => ( {
    events
} );

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIns);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    eventList: {
        width: '100%',
        paddingTop: 10,
    },
    eventContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    content: {
        marginLeft: 20,
        flexGrow: 1,
        justifyContent: 'center'
    },
    nameContainer: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 20,
        fontWeight: '400',
    },
    timeContainer: {
        padding: 5,
        marginLeft: 20,
        borderRadius: 5
    },
    timeText: {
        fontSize: 12,
        color: 'white'
    },
    locationContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    location: {
        marginLeft: 10,
        fontSize: 14,
    },
    subItemContainer: {
        backgroundColor: Colors.lightgray,
        borderRadius: 12,
        margin: 20,
        padding: 10,
    },
    subText: {
        fontSize: 14,
        lineHeight: 20
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.divider
    }
});
