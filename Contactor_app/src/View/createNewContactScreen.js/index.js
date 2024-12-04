import React, {useState} from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";
import AddContactModal from "../../Component/addNewContactModal";

//Telma

const NewContact = ({ route, navigation: {navigate}}) => {
   // const { allContacts } = route.params;
    const [isOpen, setIsOpen] = useState(false);
//?? const [importedContact, getImportedContact] = useState(); ??
    const [contactName, setContactName] = useState("");
    const [contactPhoneNumber, setContactPhoneNumber] = useState("");

    const handleSaveContact = async () => {};
        if (!contactName || !contactPhoneNumber ) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

    const AddContact = (id, name, phonenumber, image) => {
        const newContact = {
        id: contactName.length ? Math.max(...contactName.map(contact => contact.id)) + 1 : 1,
        name,
        phonenumber,
        image
    };
};

    const handleImportContacts = () => {
        Alert.alert("Coming soon!", "This is where we will implement contact import :)");
    };

    return (
        
        <View styles = { styles.container }>
            <Text styles = { styles.title }> Create New Contact or Import Contact</Text>
            <TouchableOpacity styles = { styles.button } onPress={() => setIsOpen(true)}>
                <Text styles = { styles.buttonText }>Create New Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity styles = { styles.button } onPress={handleImportContacts}>
                <Text styles = { styles.buttonText }> Import Contacts </Text>
            </TouchableOpacity>

            { isOpen && (
                <AddContactModal
                    isOpen = { isOpen }
                    closeModal = {() => setIsModalOpen(false)}
                    contactName = { contactName }
                    setContactName = { setContactName }
                    contactPhoneNumber = { contactPhoneNumber }
                    setContactPhoneNumber = { setContactPhoneNumber }
                    onSave = { handleSaveContact }
                    onCancel = {() => setIsModalOpen(false)}
                />
            )}
            { isOpen && (
                <AddContactModal
                    isOpen = { isOpen }
                    closeModal = {() => setIsModalOpen(false)}
                    contactName = { contactName }
                    setContactName = { setContactName }
                    contactPhoneNumber = { contactPhoneNumber }
                    setContactPhoneNumber = { setContactPhoneNumber }
                    onSave = { handleSaveContact }
                    onCancel = {() => setIsModalOpen(false)}
                />
            )}
        </View>
    );
};

export default NewContact;