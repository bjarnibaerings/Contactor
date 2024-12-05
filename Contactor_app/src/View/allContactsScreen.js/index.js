import React, {useCallback, useEffect, useState} from "react";
import { useFocusEffect } from "@react-navigation/native"
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert, TextInput } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices";
import * as phoneContacts from "expo-contacts";

//Bjarni

const AllContacts = ({ navigation: {navigate}}) => {
    const [contactDirectory, setContacts] = useState([])
    const [searchInput, setinput] = useState("");
    const [unFilteredContacts,setUnFilteredContacts] = useState([]);



    // Filter based on search input
    const filterContacts = (input) => {
        if (input === " " || input === null) {
            // If input is empty reset to unfilteredlisf
            setContacts(unFilteredContacts);
            return;
        }
        const filteredContacts = [...unFilteredContacts].filter(contact =>
            contact.name.toLowerCase().includes(input.toLowerCase())
        )
        setContacts([...filteredContacts].sort((a, b) => 
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
    };

    // Update search filter
    const updateSearch = input => {
        setinput(input);
        filterContacts(input);
        console.log(input)
    }

    // Used to add a new contact
    const addPerson = (contactData) =>{
        const newId = contactData.id
        const newName = contactData.firstName
        const newNumber = contactData.phoneNumbers[0].number
        const newImage = contactData.imageAvailable
        const newPerson ={id: newId, name: newName, number: newNumber, image:newImage};
        fileService.addContact(newPerson);
    }

    const fetchContacts = async () => {
        

        const contacts = await fileService.getAllContacts();
        setContacts(contacts);
        setUnFilteredContacts(contacts);

        const { status } = await phoneContacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await phoneContacts.getContactsAsync();
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    const contactData = data[i];
                    addPerson(contactData);
                }
            }
        }
    };
    
    //using use focus effect for refresh
    useFocusEffect(
        useCallback(() => {
            fetchContacts();
        }, [])
    )
    return(
        <View>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={input => updateSearch(input)}/>
            <FlatList
            style={styles.listContainer}
            data={contactDirectory}
            keyExtractor={item => item.id}
            renderItem={({item}) => { //took away deconstruction so i can pass item
                return(
                <View key={item.id} style={styles.boarderContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("chosenContactScreen", {contact: item})}>
                        <Image style={styles.ImageContainer} source={{uri:item.image}}/>
                    </TouchableOpacity>
                    <Text style={styles.titleName}>{item.name}</Text>
                    </View>
                )
            }}/>
        <TouchableOpacity style = {styles.ButtonContainer} onPress={() => navigate("createNewContactsScreen")}>
            <Text style = {styles.Button}>Add New Contact</Text>
        </TouchableOpacity>
        </View>
    )
};

export default AllContacts;
