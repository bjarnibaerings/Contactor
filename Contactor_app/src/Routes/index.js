import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import AllContacts from "../View/allContactsScreen.js"
import ChosenContact from "../View/chosenContactScreen.js"
import NewContact from "../View/createNewContactScreen.js"

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="allContactsScreen">
            <Stack.Screen name="allContactsScreen" component={AllContacts} />
            <Stack.Screen name="chosenContactScreen" component={ChosenContact} />
            <Stack.Screen name="createNewContactsScreen" component={NewContact} />
        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;
