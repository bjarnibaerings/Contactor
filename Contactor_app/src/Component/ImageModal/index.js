import React from "react";
import { View, Text, Modal, Button, TouchableOpacity} from "react-native";
import * as imageServices from "../../Services/imageServices"
import styles from "./stlyes"

const ImageModal = ({ visible, onClose, onImageSelect}) => {

    const handleCamera = async () => {
        const imageUri = await imageServices.openCamera();
        if (imageUri) {
            onImageSelect(imageUri); // This passes the URI
        }
        onClose(); // Close the modal
    };

    const handleGallery = async () => {
        const imageUri = await imageServices.openGallery();
        if (imageUri) {
            onImageSelect(imageUri);
        }
        onClose(); 
    };
    
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Choose an Image</Text>

                    <TouchableOpacity style={styles.button} onPress={handleCamera}>
                        <Text style={styles.buttonText}>Take a Photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleGallery}>
                        <Text style={styles.buttonText}>Choose from Gallery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ImageModal;