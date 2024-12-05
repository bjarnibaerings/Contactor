import React, { useState } from "react";
import { View, Text, Button, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";
import EditContactModal from "../../Component/editContactModal";
import { addContact, remove } from "../../Services/fileServices";

const ChosenContact = ({ route, navigation}) => {
    const { contact } = route.params;
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [currentContact, setCurrentContact] = useState(contact);

    const toggleEditModal = () => {
        setEditModalVisible(!isEditModalVisible);
    }

    const handleImagePress = () => {
        Alert.alert("Image clicked!");
        // will be changed to expanding the image when we have free time
      };

    //function to change name or number: 
    const editContact = async (updateContact) =>{
        console.log(updateContact)
        try{
            await remove(contact);
            await addContact(updateContact);
            setCurrentContact(updateContact);
            

        } catch (error) {
            console.error("Error updating contact:", error);
            Alert.alert("Error", "Failed to update contact.");
        }
        
    }
    
    return (
        <View style = {styles.container}>
            <View style = {styles.information}>
                <View style = {styles.imageContainer}>
                    <TouchableOpacity onPress={handleImagePress}>
                        <Image source={{ uri: currentContact.image }} style={styles.contactImage}/>
                    </TouchableOpacity>
                </View>
                <Text>This should be the name:{currentContact.name}</Text>
                <Text>This should be the phone number:{currentContact.number}</Text>
                <Text>here is the ID: {currentContact.id}</Text>
                <Text>SHOULD BE ABLE TO EDIT THIS PROFILE</Text>
            </View>
            <Text>!!!As a result of modifying the contact the JSON file associated
            with this contact should be recreated with the new information!!! name, phoneNumber and photo (how the data should look like)</Text>
            <Text>So basically we are deleting and recreating? </Text>
            <Button title="Remove" onPress={async () => {
                    await remove(currentContact);
                    Alert.alert("Contact Removed", `${currentContact.name} has been successfully removed.`);
                    navigation.goBack(); }}/>
            <Button title="Edit Profile" onPress={toggleEditModal} style={styles.editButton} />
            <EditContactModal visible={isEditModalVisible} onClose={toggleEditModal} contact={currentContact} onSave={(updatedContact) => {editContact(updatedContact); toggleEditModal();}} />
        </View>
    )
};

export default ChosenContact;