import React from "react";
import { connect } from 'react-redux';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../Config/Colors";

const { width, height } = Dimensions.get('window');


const ProviderSuccess = ( { navigation, events } ) => {

    const CheckIn = () => {
        navigation.push('Home');
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: "column", justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <Text style={{
                    flexDirection: "row", marginTop: 80,
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}>{"Success!"}</Text>

                <Text style={{
                    marginTop: 16,
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}>{"Your @ has been published!"}</Text>


                <View style={{
                    justifyContent: 'center',
                    marginStart: 24,
                    height: 40,
                    marginEnd: 24,
                    elevation: 16,
                    marginTop: 50
                }}>
                    <TouchableOpacity
                        onPress={CheckIn}
                        style={{
                            textAlign: 'center',
                            height: 40,
                            borderWidth: 0,
                            borderColor: "#177EBE",
                            borderRadius: 25,
                            flexDirection: "row",
                            backgroundColor: "#1BC6E5",
                            justifyContent: "center", alignItems: "center",
                        }}>
                        <Text style={{
                            marginStart: 10,
                            textAlign: 'center',
                            justifyContent: "center", alignItems: "center",
                            fontSize: 16,
                            color: '#FFFFFF',
                        }}>{"Home"}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = ( { events: { events = [] } = {} } ) => ( {
    events
} );

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSuccess);

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
