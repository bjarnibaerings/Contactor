import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices"

//Bjarni

const AllContacts = ({ navigation: {navigate}}) => {
    const [contactDirectory, setContacts] = useState([])

    useEffect(() => {
        (async () => {
            const contacts = await fileService.getAllContacts();
            setContacts(contacts);
        })();
    }, []);
    console.log("All contacts:", contactDirectory);

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
export default AllContacts;