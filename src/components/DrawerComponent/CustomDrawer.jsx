import * as React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import Animated from 'react-native-reanimated';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { logout } from '../../actions/userActions';
import useAuth from "../../Hooks/useAuth";
import useAlert from "../../Hooks/useAlert";

function CustomDrawerContent( { logout, progress, navigation, ...rest } ) {
    const [{ authed }, { doLogout }] = useAuth();
    const [{ notFunctional }] = useAlert();

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    async function logOut() {
        navigation.closeDrawer();

        logout(); // persist in redux to propigate throught the application.
        doLogout(); // update the cookie to remove auth
        navigation.push("Login");
    }

    function handleMenuItem( url ) {
        navigation.closeDrawer()
        navigation.push(url)
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <ScrollView>
                    <Animated.View style={{ transform: [{ translateX }] }}>
                        <DrawerItemList {...rest} />
                    </Animated.View>
                    <Animated.View style={[{ marginTop: 10, transform: [{ translateX }], letterSpacing: 3 }]}>
                        <DrawerItem
                            label={"@ Now"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('Now')}
                        />
                        <DrawerItem
                            label={"Schedule @"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('ProviderSchedulePost')}
                        />
                        <DrawerItem
                            label={"Edit Profile"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('UserProfile')}
                        />
                        <DrawerItem
                            label={"See Subscribers"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('ProScreen')}
                        />
                        <DrawerItem
                            label={"Scheduled @'s"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={notFunctional}
                        />
                        <DrawerItem
                            label={"Show Code"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }} 
                            onPress={notFunctional}
                        />
                        <DrawerItem
                            label={"Follow Pro"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('Follow')}
                            SubFollow
                        />
                        <DrawerItem
                            label={"SubFollow Pro"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={() => handleMenuItem('SubFollow')}
                        />
                        <DrawerItem
                            label={"Follow Pro"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={notFunctional}
                        />
                    </Animated.View>
                    <Animated.View style={[{ transform: [{ translateX }] }]}>
                        <DrawerItem
                            label={"Logout"}
                            labelStyle={{ letterSpacing: 1, fontSize: 16 }}
                            onPress={logOut}
                        />
                    </Animated.View>
                </ScrollView>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    drawerbtn: {
        marginLeft: 16,
    }
});

const mapStateToProps = ( { restoreTokenReducer } ) => ( { restoreTokenReducer } );

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent);
