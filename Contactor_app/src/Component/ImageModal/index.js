import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./stlyes"

const ImageModal = ({ visible, onClose, onImageSelect}) => {
    const [selectedImage, setSelectedImage] = useState(null);

const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
        Alert.alert("Permission required", "Camera permissions are required to take a photo.");
        return;
    }

    const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8,
    });

    if (!result.canceled) {
        const imageUri = result.assets ? result.assets[0].uri : result.uri; // using this so it passes the right uri and not just some random variables 
        setSelectedImage(imageUri);
        onImageSelect(imageUri); 
        onClose();
    }
};

const openGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
        Alert.alert("Permission required", "Media library permissions are required to choose a photo.");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.7,
    });

    if (!result.canceled) {
        const imageUri = result.assets ? result.assets[0].uri : result.uri; // using this so it passes the right uri and not just some random variables 
        setSelectedImage(imageUri);
        onImageSelect(imageUri); 
        onClose();
    }
};
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Choose an Image</Text>
                    <Button title="Take a Photo" onPress={openCamera} />
                    <Button title="Choose from Gallery" onPress={openGallery} />
                    <Button title="Close" onPress={onClose} color="red" />
                </View>
            </View>
        </Modal>
    );
};

export default ImageModal;