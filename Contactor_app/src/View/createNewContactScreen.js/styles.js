import { StyleSheet, Dimensions } from "react-native";

const {Width: WinWidth} = Dimensions.get("window");

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: .3,
        borderRadius: 10,
        width: WinWidth - 100,
        backgroundColor: "white",
        padding: 40
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 6,
        color: "black",
        alignSelf: "center"
    },
    buttonText:{
        fontSize: 14,
        color: "aqua",
        textAlign: "center"
    },
    button: {
        padding: 10,
        borderRadius: 6,
        textAlign: "center",
        color: "aquamarine",
        borderColor: "aquamarine"
    }
});