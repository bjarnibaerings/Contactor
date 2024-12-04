import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";
import { TextInput } from "react-native-web";
import { TouchableOpacity } from "react-native";
import AddImage from "../addImageModal";
import Modal from '../Modal';

const AddContactModal = ({ 
    isOpen, 
    closeModal, 
    contactName, 
    setContactName,
    contactPhoneNumber,
    setContactPhoneNumber,
}) => (
    <Modal IsOpen = { isOpen } CloseModal = { closeModal }>
        <View styles = { styles.container}>
            <Text styles = { styles.title }> Create New Contact </Text>
            <TouchableOpacity onPress={ () => AddImage() }>
                <Entypo style = { styles.imageIcon } name = "Contact Image"/>
            </TouchableOpacity>
            <TextInput
                styles = { styles.input }
                placeholder = "Contact Name"
                value = { contactName }
                onChangeText = { setContactName }
            />
            <TextInput
                styles = { styles.input }
                placeholder = "Contact Phone Number"
                value = { contactPhoneNumber }
                onChangeText = { setContactPhoneNumber }
            />
        </View>
        <TouchableOpacity styles = { styles.button } onPress = { onSave }>
            <Text styles = { styles.buttonText }>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity styles = { styles.button } onPress = { onCancel }>
            <Text styles = { styles.buttonText }>Cancel</Text>
        </TouchableOpacity>
    </Modal>
);

AddContactModal.prototype = {
    IsOpen: PropTypes.bool.isRequired,
    CloseModal: PropTypes.func.isRequired,
    ContactName: PropTypes.string.isRequired,
    setContactName: PropTypes.func.isRequired,
    ContactPhoneNumber: PropTypes.string.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    OnSave: PropTypes.func.isRequired,
    OnCancel: PropTypes.func.isRequired,
}

export default AddContactModal;