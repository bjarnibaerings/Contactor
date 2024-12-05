import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert, TextInput } from "react-native";
import styles from "./styles";
import * as fileService from "../../Services/fileServices";
import * as phoneContacts from "expo-contacts";

//Bjarni

const AllContacts = ({ navigation: {navigate}}) => {
    const [contactDirectory, setContacts] = useState([])
    const [searchInput, setinput] = useState("");
    const [unFilteredContacts,setUnFilteredContacts] = useState([]);
    const [useEffectCalled,setUseEffectCalled] = useState([]);

    const sortDirectory = () =>{
        const sortedDirect = [...contactDirectory].sort((a,b) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        setContacts(sortedDirect)
        
    }

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


    const updateSearch = input => {
        setinput(input);
        filterContacts(input);
        console.log(input)
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
            console.log("Fuck This", contacts)
            setContacts(contacts);
            setUnFilteredContacts(contacts);
            // Ask permission for getting contacts
            const {status} = await phoneContacts.requestPermissionsAsync();
            if (status === "granted"){
                
                const {data} = await phoneContacts.getContactsAsync();
                if (data.length > 0){
                    
                    for (i in data){
                        const contactData = data[i]
                        addPerson(contactData)
                    }
                }
            }
            // SORT SHOULD BE BE HERE BUT WHEN I ADD ANY FUNCTION OR ANYTHING INCLUDING CONSOLE.LOG IT DOES NOT WORK WHYYYYYYY????
            //updateSearch("")
        })();
    }, [useEffectCalled,setUseEffectCalled]);

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
// KILL ME
export default AllContacts;