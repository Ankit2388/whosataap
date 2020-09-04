import * as React from 'react';
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import CustomDrawerContent from '../components/DrawerComponent/CustomDrawer';
import DrawerButton from '../components/DrawerComponent/DrawerButton';
import Colors from '../Config/Colors';
import { ic_logo_main } from "../assets";
import ImageButton from "../components/Elements/ImageButton";

import HomePage from '../pages/HomePage';
import ProviderScheduleAt from '../pages/ProviderScheduleAt';
import ProviderCheckinAt from '../pages/ProviderCheckinAt';
import ProviderScheduleSuccess from '../pages/ProviderScheduleSuccess';
import ProviderSuccess from '../pages/ProviderSuccess';
import ProScreen from '../pages/ProScreen/ProScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const renderTopHomeIcon = ( navigation ) => {
    return (
        <ImageButton
            style={styles.appIconImageStyle}
            imageName={ic_logo_main}
            onPress={() => navigation.push('Home')}
        />
    );
}

const headerBackground = () => (
    <LinearGradient
        colors={[Colors.gradientColor1, Colors.gradientColor2]}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={{ width: '100%', height: '100%' }}/>
);

const headerLeft = ( navigation ) => (
    <DrawerButton navigationProps={navigation}/>
)

export default function appMainNavigator( props ) {
    return (
        <Drawer.Navigator
            drawerContent={myProps => <CustomDrawerContent {...myProps} childProps={props}/>}
            drawerStyle={{ paddingTop: 20 }}
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#ffffff',
                labelStyle: {
                    fontSize: 24,
                }
            }}>
            <Drawer.Screen
                name="HomeStack"
                component={appMainStack}
                options={{
                    drawerLabel: "",
                    activeBackgroundColor: '#7f6e6e',
                    drawerIcon: ( { focused, color, size } ) => (
                        <FontAwesome size={size} name={'bars'}/>
                    ),
                }}/>
        </Drawer.Navigator>
    )
}

function appMainStack( { navigation } ) {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomePage}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "Home",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        textAlign: "center",
                        fontSize: 22,
                    }
                }}/>
            <Stack.Screen
                name="ProviderSchedulePost"
                component={ProviderScheduleAt}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                    }
                }}/>

<Stack.Screen
                name="ProScreen"
                component={ProScreen}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                    }
                }}/>

<Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerBackground,
          headerLeft: () => headerLeft(navigation),
          headerRight: () => renderTopHomeIcon(navigation),
          headerTitle: "",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Follow"
        component={Follow}
        options={{
          headerBackground,
          headerLeft: () => headerLeft(navigation),
          headerRight: () => renderTopHomeIcon(navigation),
          headerTitle: "",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="SubFollow"
        component={SubFollow}
        options={{
          headerBackground,
          headerLeft: () => headerLeft(navigation),
          headerRight: () => renderTopHomeIcon(navigation),
          headerTitle: "",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      />

            <Stack.Screen
                name="ProviderScheduleSuccess"
                component={ProviderScheduleSuccess}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                    }
                }}/>

            <Stack.Screen
                name="ProviderSuccess"
                component={ProviderSuccess}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                    }
                }}/>
            <Stack.Screen
                name="ProviderPost"
                component={ProviderCheckinAt}
                options={{
                    headerBackground,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => renderTopHomeIcon(navigation),
                    headerTitle: "Check-In",
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        textAlign: "center",
                        fontSize: 22,
                    }
                }}/>
        </Stack.Navigator>
    )
}


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
        height: 35,
        width: 35,
    },
});
