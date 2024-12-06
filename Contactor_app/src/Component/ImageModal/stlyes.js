import { StyleSheet } from "react-native";

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
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        padding: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "darkblue",
        backgroundColor: "darkblue",
        margin: 5,
        width: 200,
        alignItems: "center", // Centers the text horizontally
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center", // Centers the text
    },
});

export default styles