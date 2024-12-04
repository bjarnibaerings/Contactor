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

    const sortDirectory = () =>{
        const sortedDirect = contactDirectory.sort((a,b) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        console.log(sortedDirect)
        setContacts(sortedDirect)
        console.log(contactDirectory)
    }

    const filterContacts = (input) => {
        if (input === "") {
            // If input is empty reset to unfilteredlis
            setContacts(unFilteredContacts);
            sortDirectory()
            return;
        }
        const filteredContacts = unFilteredContacts.filter(contact =>
            contact.name.toLowerCase().includes(input.toLowerCase())
        );
        setContacts(filteredContacts);
        sortDirectory()
    };


    const updateSearch = input => {
        setinput(input);
        filterContacts(input);
    }


    const addPerson = (contactData) =>{
        const newId = contactData.id
        const newName = contactData.firstName
        const newNumber = contactData.phoneNumbers[0].number
        const newImage = contactData.imageAvailable
        const newPerson ={id: newId, name: newName, number: newNumber, image:newImage};
        fileService.addContact(newPerson)
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
                    for (i in data){
                        const contactData = data[i]
                        addPerson(contactData)
                    }
                    sortDirectory()
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