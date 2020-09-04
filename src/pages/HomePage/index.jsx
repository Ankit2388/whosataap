import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';

import Colors from "../../Config/Colors";
import useApiCall from "../../Hooks/useApiCall";
import PageLoadingIndicator from "../../components/Elements/PageLoadingIndicator";
import { RadiusButton } from "../../components/Elements/CustomButton";
import Row from "../../components/Elements/Containers/Row";

export default ( { navigation } ) => {
    const [{ data, loading, error }, doFetch] = useApiCall({ navigation });
    const [opened, setOpened] = useState({});

    // Page load, start loading the following entries
    useEffect(() => doFetch('i-am/following'), []);

    const handleShowMorePress = ( item ) => {
        // get if the item is opened. if its not set then its not open.
        const item_opened = opened[item] || false;
        // toggle opened or not of the item
        setOpened({ ...opened, [item]: !item_opened });
    }

    // Links
    const ProviderSchedulePost = () => navigation.push('ProviderSchedulePost');
    const ProviderPost = () => navigation.push('ProviderPost');

    const _renderEventItem = ( iteration ) => {
        const {
            uuid,
            start_from_now = 'n/a',
            whats_up = null,

            member: {
                name: member_name,
                photo = require('../../assets/images/icon.png')
            },

            location: {
                name: location_name,
            },
        } = iteration.item;

        const is_opened = opened[uuid] || false;

        return (
            <View>
                <View style={styles.eventContainer}>
                    <Image source={photo} style={styles.photo}/>
                    <View style={styles.content}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{member_name}</Text>
                            <LinearGradient
                                colors={[Colors.gradientColor1, Colors.gradientColor2]}
                                start={{ x: 0, y: 0.75 }}
                                end={{ x: 1, y: 0.25 }}
                                style={styles.timeContainer}>
                                <Text style={styles.timeText}>
                                    {start_from_now}
                                </Text>
                            </LinearGradient>
                        </View>
                        <View style={styles.locationContainer}>
                            <SimpleLineIcons name="location-pin" size={20} color="black"/>
                            <Text style={styles.location}>{location_name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleShowMorePress(uuid)}>
                        <Entypo name={'chevron-small-' + ( is_opened ? "up" : "down" )} size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                {is_opened && <View style={styles.subItemContainer} key={uuid}>
                    <Text style={styles.subText}>
                        {whats_up}
                    </Text>
                </View>}
            </View>
        )
    };

    return (
        <PageLoadingIndicator loading={loading}>
            {!loading &&
            <FlatList
                data={data}
                renderItem={_renderEventItem}
                contentContainerStyle={styles.eventList}
                showsVerticalScrollIndicator={false}
                keyExtractor={( item, index ) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.divider}/>}
            />}

            <Row>
                <RadiusButton
                    onPress={ProviderSchedulePost}
                    title="Schedule an @"/>
                <RadiusButton
                    onPress={ProviderPost}
                    title="Check-In @"/>
            </Row>
        </PageLoadingIndicator>
    )
};

const styles = StyleSheet.create({
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
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.divider
    }
});
