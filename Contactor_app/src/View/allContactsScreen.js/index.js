import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices"

//Bjarni

const allContacts = ({ navigation: {navigate}}) => {
    const [contactDirectory, setContacts] = useState([])

    const addJohn = () =>{
        const newId = "12345"
        const newName = "John"
        const newNumber = "894-5647"
        const newImage = "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
        const newJhon ={id: newId, name: newName, number: newNumber, image:newImage};
        fileService.addContact(newJhon)
    }

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
export default allContacts;