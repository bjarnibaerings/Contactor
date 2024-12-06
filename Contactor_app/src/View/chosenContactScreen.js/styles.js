import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F2F1F1",
        position: "relative", 
    },
    information: {
        flex:1,
        padding: 20,
        backgroundColor: "#E8E7E7",
    },
    contactImage: {
        width: 100, 
        height: 100,
        borderRadius: 50, 
        backgroundColor: "red"
    },
    imageContainer: {
        alignItems: "center", 
        backgroundColor: "#F2F1F1"
    },
    editButton: {
        padding: 5,
        borderRadius: 100,
        textAlign: "center",
        color: "white",
        borderColor: "darkblue",
        backgroundColor: "darkblue",
        alignSelf: "center",
        width: 300,
        marginBottom: 10
    },
    buttonText:{
        fontSize : 30
    },
    text:{
        borderWidth: 2,
        borderColor: "darkblue",
        borderRadius: 5,
        padding: 12,
        margin: 18,
        fontSize: 16,
        backgroundColor: "white",
        fontcolor: "black",
        color: "black",
        fontWeight: "bold", // Added property to make text bold
    },
    
});

export default styles