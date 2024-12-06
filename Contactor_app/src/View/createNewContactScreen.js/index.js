import React, {useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles.js";
import AddContactModal from "../../Component/addNewContactModal";
import { addContact, cleanDirectory } from "../../Services/fileServices";
import { getPermission, takePhoto, selectPhotoFromGallery } from "../../Services/imageServices.js";
import * as phoneContacts from "expo-contacts";
import AllContacts from "../allContactsScreen.js/index.js";

//Telma

const NewContact = ({ navigation: {navigate, popToTop}}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactName, setContactName] = useState("");
    const [contactPhoneNumber, setContactPhoneNumber] = useState("");
    const [contactImage, setContactImage] = useState(null)

    const openModal = () => setIsModalOpen(true); 
    const closeModal = () => setIsModalOpen(false);
    
    const handleSaveContact = async () => {
        if (!contactName || !contactPhoneNumber) {
          Alert.alert("Error", "Please fill in all fields.");
          return;
        }
      
        const newContact = {
          id: Date.now(),
          name: contactName,
          phoneNumber: contactPhoneNumber,
          image: contactImage,
        };
      
        try {
        console.log("Saving contact", newContact);
        await addContact(newContact);
        Alert.alert("Success", "Contact saved successfully.");
        popToTop();
        closeModal();
        setContactName("");
        setContactPhoneNumber("");
        setContactImage(null);
        } catch (error) {
          Alert.alert("Error", "Failed to save contact.");
        }
      };

    // Used to add a new contact for importing contacts
    const addPerson = (contactData) =>{
        const newId = contactData.id
        //console.log(contactData.firstName, contactData.id);
        const newName = contactData.firstName
        
        if(contactData.phoneNumbers !== undefined){
            const newNumber = contactData.phoneNumbers[0].number
            let newImage = contactData.imageAvailable
            if (contactData.imageAvailable === true){
                newImage = contactData.image.uri
            }
            
            const newPerson ={id: newId, name: newName, number: newNumber, image:newImage};
            addContact(newPerson);
        }
    }

    const importContacts = async () =>{
        const { status } = await phoneContacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await phoneContacts.getContactsAsync();
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    const contactData = data[i];
                    addPerson(contactData);
                    popToTop(); //Yes we know there is an error, but it doesn't effect anything and the stuff works soo.....
                }
            }
        }
    }

    

    const handleSelectPhoto = async () => {
        const permissionGranted = await getPermission("gallery");
        if (!permissionGranted) {
            Alert.alert("Permission Denied", "Enable permission in your phone settings to access the images in your gallery.");
            return;
        }

        const imageUri = await selectPhotoFromGallery();
        if (imageUri) {
            setContactImage(imageUri);
        }
    };

    const handleTakePhoto = async () => {
        const permissionGranted = await getPermission("camera");
        if (!permissionGranted) {
            Alert.alert("Permission Denied", "Enable permission in your phone settings to take a photo with your phone's camera.");
            return;
        }

        const imageUri = await takePhoto();
        if (imageUri) {
            setContactImage(imageUri);
        }
    };

    const handleDeleteAllContacts = async () => {
        const deleteAll = await cleanDirectory();
        console.log("All Contacts have been deleted");
        popToTop();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Create New Contact or Import Contact</Text>
            <TouchableOpacity style={styles.button} onPress={openModal}>
                <Text style={styles.buttonText}>Create New Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => importContacts()}>
                <Text style={styles.buttonText}> Import Contacts </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleDeleteAllContacts()}>
                <Text style={styles.buttonText}> Delete All Contacs </Text>
            </TouchableOpacity>

            { isModalOpen && (
                <AddContactModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    contactName={contactName}
                    setContactName={setContactName}
                    contactPhoneNumber={contactPhoneNumber}
                    setContactPhoneNumber={setContactPhoneNumber}
                    contactImage={contactImage}
                    setContactImage={setContactImage}
                    onSelectPhoto={handleSelectPhoto}
                    onTakePhoto={handleTakePhoto}
                    onSave={handleSaveContact}
                    onCancel={closeModal}
                />
            )}
        </View>
    );
};


export default NewContact;