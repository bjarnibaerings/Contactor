import React, {useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";

//Bjarni

const allContacts = ({ navigation: {navigate}}) => {
    console.log("asdlkjqiowdjiopqwdkpoqwdkopqwk")
    return(
        <View>
        <TouchableOpacity onPress={() => navigate("createNewContactsScreen")}>
            <Text style = {styles.Button}>Create New Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("chosenContactScreen")}>
            <Text style = {styles.Button}>Chosen Contact Screen</Text>
        </TouchableOpacity>
        </View>
    )
};
// KILL ME
export default allContacts;