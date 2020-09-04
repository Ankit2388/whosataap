import * as React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginPage from "../pages/Login";
import AppMainNavigator from "./appMainNavigator";
import LoginOrRegister from "../pages/LoginOrRegister";
import Register from "../pages/Register";
import RegisterTwo from "../pages/RegisterTwo";
import ProviderScheduleAt from "../pages/ProviderScheduleAt";

const Stack = createStackNavigator();

function MainNavigator() {
    const navItem = ( name, page, options = {} ) => (
        <Stack.Screen
            name={name}
            options={{ headerShown: false }}
            component={page}
            {...options}
        />
    );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginOrRegister">
                {navItem('Login', LoginPage)}
                {navItem('LoginOrRegister', LoginOrRegister)}
                {navItem('RegisterTwo', RegisterTwo)}
                {navItem('Register', Register)}
                {navItem('ProviderScheduleAt', ProviderScheduleAt)}
                {navItem('Home', AppMainNavigator)}
                {navItem('Now', AppMainNavigator)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = ( { restoreTokenReducer: restoreTokenResponse } ) => ( { restoreTokenResponse } );

export default connect(mapStateToProps)(MainNavigator);
