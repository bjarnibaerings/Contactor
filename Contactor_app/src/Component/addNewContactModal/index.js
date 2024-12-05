import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Modal from "../Modal";

const AddContactModal = ({
    isOpen,
    closeModal,
    contactName,
    setContactName,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactImage,
    onSelectPhoto,
    onTakePhoto,
    onSave,
    onCancel,
}) => (
    <Modal isOpen={isOpen} closeModal={closeModal}>
        <View style={styles.container}>
            <Text style={styles.title}>Create New Contact</Text>
            <TextInput
                style={styles.input}
                placeholder="Contact Name"
                value={contactName}
                onChangeText={setContactName}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Phone Number"
                value={contactPhoneNumber}
                onChangeText={setContactPhoneNumber}
            />
            <View style={styles.imageContainer}>
                {contactImage && <Image source={{ uri: contactImage }} style={styles.imagePreview} />}
                <TouchableOpacity style={styles.button} onPress={onSelectPhoto}>
                    <Text style={styles.buttonText}>Pick from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onTakePhoto}>
                    <Text style={styles.buttonText}>Take Photo</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={onSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </Modal>
);

AddContactModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,
    setContactName: PropTypes.func.isRequired,
    contactPhoneNumber: PropTypes.string.isRequired,
    setContactPhoneNumber: PropTypes.func.isRequired,
    contactImage: PropTypes.string,
    onSelectPhoto: PropTypes.func.isRequired,
    onTakePhoto: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default AddContactModal;
