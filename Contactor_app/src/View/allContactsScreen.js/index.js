import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert, TextInput } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices";
import * as phoneContacts from "expo-contacts";

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
        const filteredContacts = unFilteredContacts.filter(contact =>
            contact.name.toLowerCase().includes(input.toLowerCase())
        );
        setContacts(filteredContacts);
    };

    const updateSearch = input => {
        setinput(input);
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
            const {status} = await phoneContacts.requestPermissionsAsync();
            if (status === "granted"){
                const {data} = await phoneContacts.getContactsAsync();
                if (data.length > 0){
                    const contactData = data[5];
                    console.log(contactData);
                }
            }
        })();
    }, []);

    return(
        <View>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={input => updateSearch(input)}/>
        
            <FlatList
            style= {styles.listContainer}
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
        <TouchableOpacity style = {styles.ButtonContainer} onPress={() => navigate("createNewContactsScreen")}>
            <Text style = {styles.Button}>Add New Contact</Text>
        </TouchableOpacity>
        </View>
    )
};
// KILL ME
export default allContacts;