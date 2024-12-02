import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import allContacts from "../View/allContactsScreen.js"
import chosenContact from "../View/chosenContactScreen.js"
import newContact from "../View/createNewContactScreen.js"

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="allContactsScreen">
            <Stack.Screen name="allContactScreen" component={allContacts} />
            <Stack.Screen name="allContactScreen" component={chosenContact} />
            <Stack.Screen name="createNewContactsScreen" component={newContact} />
        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;