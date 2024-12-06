import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles.js";
import Modal from "../Modal";
import ImageModal from "../../Component/ImageModal";
import { takePhoto, selectFromCameraRoll } from "../../Services/imageServices.js";

const AddContactModal = ({
    isOpen,
    closeModal,
    contactName,
    setContactName,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactImage,
    setContactImage,
    selectFromCameraRoll,
    takePhoto,
    onSave,
    onCancel,
}) => (
    <Modal isOpen={isOpen} closeModal={closeModal}>
        <View style={styles.container}>
            <Text style={styles.title}>Create New Contact</Text>
            <TextInput
                style={styles.input}
                placeholder="Contact Name"
                placeholderTextColor={"darkblue"}
                value={contactName}
                onChangeText={setContactName}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Phone Number"
                keyboardType="phone-pad"
                placeholderTextColor={"darkblue"}
                value={contactPhoneNumber}
                onChangeText={setContactPhoneNumber}
            />
             <View style={styles.imageContainer}>
                <TouchableOpacity onPress={toggleImageModal}>
                        <Image source={{ uri:  "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg" }} style={styles.contactImage} />
                    </TouchableOpacity>
                    <ImageModal visible={isImageModalVisible} onClose={toggleImageModal} onImageSelect={handleImageSelect}/>
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
    setContactImage: PropTypes.func.isRequired,
    onSelectPhoto: PropTypes.func.isRequired,
    onTakePhoto: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default AddContactModal;
