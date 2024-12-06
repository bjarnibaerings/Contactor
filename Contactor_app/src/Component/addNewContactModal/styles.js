import { StyleSheet, Dimensions } from "react-native";

const {Width: WinWidth} = Dimensions.get("window");

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        paddingHorizontal: 18,
        backgroundColor: 'white',
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "white",
        alignSelf: "center",
        margin: 15,
        textAlign: "center"
    },
    input:{
        borderWidth: 2,
        borderColor: "darkblue",
        borderRadius: 5,
        padding: 12,
        margin: 18,
        fontSize: 16,
        backgroundColor: "white",
        fontcolor: "black",
        color: "black",
    },
    imageIcon:{
        width: 100,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        padding: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "darkblue",
        textAlign: "center",
        color: "white",
        backgroundColor: "white",
        margin: 5,
        width: 200
    },
    buttonText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "darkblue",
        alignSelf: "center"
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 10,
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    imageButton:{
        padding: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "cadetblue",
        textAlign: "center",
        color: "white",
        backgroundColor: "lightblue",
        margin: 5,
        width: 200,
    },
    imageButtonText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "cadetblue",
        alignSelf: "center"
    },
});

export default styles;