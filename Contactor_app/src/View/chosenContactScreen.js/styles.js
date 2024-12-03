import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F2F1F1",
        position: "relative", // Ensures children can use absolute positioning
    },
    information: {
        flex:1,
        padding: 20,
        backgroundColor: "#E8E7E7",
    },
    contactImage: {
        width: 100, // Set the image size
        height: 100,
        borderRadius: 50, // Make the image circular
        backgroundColor: "red"
    },
    imageContainer: {
        alignItems: "center", 
        backgroundColor: "blue"
    },
    editButton: {
        position: "absolute", // Fixes the button position
        bottom: 20, // Distance from the bottom of the screen
        left: 20, // Optional: Align left
        right: 20, // Optional: Align right
    },

});

export default styles