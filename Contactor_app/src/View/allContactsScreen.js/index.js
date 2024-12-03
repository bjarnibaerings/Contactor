import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert, TextInput } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices"

//Bjarni

const allContacts = ({ navigation: {navigate}}) => {
    const [contactDirectory, setContacts] = useState([])
    const [searchInput, setinput] = useState("");
    const [unFilteredContacts,setUnFilteredContacts] = useState([]);

    const filterContacts = (input) => {
        if (input === "") {
            // If input is empty reset to unfilteredlist
            setContacts(unFilteredContacts);
            return;
        }
        const filteredContacts = contactDirectory.filter(contact =>
            contact.name.toLowerCase().includes(input.toLowerCase())
        );
        setContacts(filteredContacts);
    };

    const updateSearch = input => {
        setinput(input);
        console.log(input);
        filterContacts(input);
    }


    const addJohn = () =>{
        const newId = "8935135"
        const newName = "Bob"
        const newNumber = "521-5647"
        const newImage = "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
        const newJhon ={id: newId, name: newName, number: newNumber, image:newImage};
        fileService.addContact(newJhon)
    }

    useEffect(() => {
        (async () => {
            const contacts = await fileService.getAllContacts();
            setContacts(contacts);
            setUnFilteredContacts(contacts);
        })();
    }, []);
    console.log("All contacts:", contactDirectory);

    return(
        <View>
        <TouchableOpacity onPress={() => navigate("createNewContactsScreen")}>
            <Text style = {styles.Button}>Create New Screen</Text>
        </TouchableOpacity>
        
        <Text>Search:</Text>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={input => updateSearch(input)}/>
        
            <FlatList
            data={contactDirectory}
            keyExtractor={item => item.id}
            renderItem={({item: {id, image, name}}) => {
                return(
                <View key={id} style={styles.boarderContainer}>
                <TouchableOpacity onPress={() => navigate("chosenContactScreen")}>
                <Image style={styles.ImageContainer} source={{uri:image}}/>
                </TouchableOpacity>
                <Text style={styles.titleName}>{name}</Text>
                </View>
                )
            }}/>
        </View>
    )
};
// KILL ME
export default allContacts;