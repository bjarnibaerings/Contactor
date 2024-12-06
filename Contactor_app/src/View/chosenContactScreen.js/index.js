import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Alert, Linking } from "react-native";
import styles from "./styles";
import EditContactModal from "../../Component/editContactModal";
import ImageModal from "../../Component/ImageModal";
import { addContact, remove } from "../../Services/fileServices";


const ChosenContact = ({ route, navigation}) => {
    const { contact } = route.params;
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [currentContact, setCurrentContact] = useState(contact);
    const [isImageModalVisible, setImageModalVisible] = useState(false);

    const toggleEditModal = () => {
        setEditModalVisible(!isEditModalVisible);
    }
    const toggleImageModal = () => {
        setImageModalVisible(!isImageModalVisible);
    };

    const imageSelect = async (uri) => { //this takes uri from the modal and changes it from the currentContact to the updatedContact.
        const updatedContact = { ...currentContact, image: uri };
        try {    
            await remove(currentContact);
            await addContact(updatedContact);
            setCurrentContact(updatedContact);
        } catch (error) {
            console.error("Error updating image :/", error);
  
        }
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
        }
        
    }
    
    // *** Added function for making a call ***
    const makeCall = () => {
        const phoneNumber = `tel:${currentContact.number}`;
        Linking.openURL(phoneNumber);
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.information}>
                <View style = {styles.imageContainer}>
                    <TouchableOpacity onPress={toggleImageModal}>
                        <Image source={{ uri: currentContact.image }} style={styles.contactImage} />
                    </TouchableOpacity>
                    <ImageModal visible={isImageModalVisible} onClose={toggleImageModal} onImageSelect={imageSelect}/>
                </View>
                <Text>Contact name:{currentContact.name}</Text>
                <Text>phone number:{currentContact.number}</Text>
                <Text>here is the ID: {currentContact.id}</Text>
            </View>

            <Button title="Remove" onPress={async () => {
                    await remove(currentContact);
                    Alert.alert("Contact Removed", `${currentContact.name} has been successfully removed.`);
                    navigation.goBack(); }}/>
            <Button title="Edit Profile" onPress={toggleEditModal} style={styles.editButton} />
            <EditContactModal visible={isEditModalVisible} onClose={toggleEditModal} contact={currentContact} onSave={(updatedContact) => {editContact(updatedContact); toggleEditModal();}} />
            <Button title="Call Contact" onPress={makeCall} />
        </View>
    )
};

export default ChosenContact;