import React from "react";
import { View, Text, Modal, Button, TextInput, StyleSheet } from "react-native";

const EditContactModal = ({ visible, onClose }) => {
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
                    <TextInput placeholder="Name" style={styles.input} />
                    <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" />
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 15,
        padding: 10,
    },
});

export default EditContactModal;
