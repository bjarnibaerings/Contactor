import React,{useState} from "react";
import { View, Text, Modal, Button, TextInput, StyleSheet } from "react-native";
import styles from "./styles"


const EditContactModal = ({ visible, onClose, contact, onSave }) => {
    const [name, setName] = useState(contact.name)
    const [phoneNumber, setPhoneNumber] = useState(contact.number)

    const handleSave = () => {
        onSave({ ...contact, name, number: phoneNumber });
        onClose(); 
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose} // Handles Android back button
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Edit Contact</Text>

                    <TextInput placeholder={contact.name} style={styles.input} value={name} onChangeText={setName} />
                    <TextInput placeholder={contact.number} style={styles.input} keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber}/>
                    <Button title="Save" onPress={handleSave}></Button>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};



export default EditContactModal;
