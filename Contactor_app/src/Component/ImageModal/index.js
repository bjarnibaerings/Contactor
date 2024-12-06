import React from "react";
import { View, Text, Modal, Button } from "react-native";
import * as imageServices from "../../Services/imageServices"
import styles from "./stlyes"

const ImageModal = ({ visible, onClose, onImageSelect}) => {
    const handleCamera = async () => {
        try {
            const imageUri = await imageServices.openCamera();
            if (imageUri) {
                onImageSelect(imageUri); //this passes the uri
            }
        } catch (error) {
            console.error("Error trying to access camera:", error);
        } finally {
            onClose();
        }
    };

    const handleGallery = async () => {
        try {
            const imageUri = await imageServices.openGallery();
            if (imageUri) {
                onImageSelect(imageUri); 
            }
        } catch (error) {
            console.error("Error trying to access galery:", error);
        } finally {
            onClose();
        }
    };
    
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Choose an Image</Text>
                    <Button title="Take a Photo" onPress={handleCamera} />
                    <Button title="Choose from Gallery" onPress={handleGallery} />
                    <Button title="Close" onPress={onClose} color="red" />
                </View>
            </View>
        </Modal>
    );
};

export default ImageModal;