import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
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
    image: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginBottom: 10,
    }
});

export default styles