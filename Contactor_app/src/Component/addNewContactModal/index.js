import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";
import ContactModal from "../contactModal"
import { TextInput } from "react-native-web";

const addContactModal = ({ 
    isOpen, 
    closeModal, 
    contactName, 
    setContactName, 
    contactImage, 
    setContactImage,
    contactPhoneNumber,
    setContactPhoneNumber,
}) => (
    <ListModal isOpen = { isOpen } closeModal = { closeModal }>
        <View styles = { styles.container}>
            <Text styles = { styles.title }> Create New Contact </Text>
            <TextInput
                styles = { styles.input }
                placeholder = "Contact Name"
                value = { contactName }
                onChangeText = { setContactName }
            />
            <TextInput
                styles = { styles.input }
        </View>
    </ListModal>
);