import React,{useState} from "react";
import { View, Text, Modal, Button, TextInput, Image } from "react-native";
import styles from "./styles"


const EditContactModal = ({ visible, onClose, contact, onSave }) => {
    const [name, setName] = useState(contact.name)
    const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber)

    const handleSave = () => {
        onSave({ ...contact, name, phoneNumber: phoneNumber });
        onClose(); 
    };
    //comment
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Edit Contact</Text>
                    <TextInput placeholder={contact.name} style={styles.input} value={name} onChangeText={setName} />
                    <TextInput placeholder={contact.phoneNumber} style={styles.input} keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber}/>
                    <Button title="Save" onPress={handleSave}></Button>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};



export default EditContactModal;
