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
        if (input === "" || input === null) {
            // If input is empty reset to unfilteredlisf
            setContacts([...unFilteredContacts].sort((a, b) => 
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
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

    

    const fetchContacts = async () => {
        
        const contacts = await fileService.getAllContacts();
        setContacts([...contacts].sort((a, b) => 
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
        setUnFilteredContacts([...contacts].sort((a, b) => 
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
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
                    <TouchableOpacity onPress={() => navigate("chosenContactScreen", {contact: item})}>
                        <Image style={styles.ImageContainer} source={{uri:item.image}}/>
                    </TouchableOpacity>
                    <Text style={styles.titleName}>{item.name}</Text>
                    </View>
                )
            }}/>
        <TouchableOpacity style = {styles.ButtonContainer} onPress={() => navigate("createNewContactsScreen")}>
            <Text style = {styles.Button}>Manage Contacts</Text>
        </TouchableOpacity>
        </View>
    )
};

export default AllContacts;
