import React, {useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles.js";
import AddContactModal from "../../Component/addNewContactModal";
import { addContact } from "../../Services/fileServices";

//Telma

const NewContact = ({ route, navigation: {navigate}}) => {
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
        closeModal();
        setContactName("");
        setContactPhoneNumber("");
        setContactImage(null);
        } catch (error) {
          Alert.alert("Error", "Failed to save contact.");
        }
      };
      
    const handleImportContacts = () => {
        Alert.alert("Coming soon!", "This is where we will implement contact import :)");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Create New Contact or Import Contact</Text>
            <TouchableOpacity style={styles.button} onPress={openModal}>
                <Text style={styles.buttonText}>Create New Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleImportContacts}>
                <Text style={styles.buttonText}> Import Contacts </Text>
            </TouchableOpacity>

            { isModalOpen && (
                <AddContactModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    contactName={contactName}
                    setContactName={setContactName}
                    contactPhoneNumber={contactPhoneNumber}
                    setContactPhoneNumber={setContactPhoneNumber}
                    onSave={handleSaveContact}
                    onCancel={closeModal}
                />
            )}
        </View>
    );
};


export default NewContact;