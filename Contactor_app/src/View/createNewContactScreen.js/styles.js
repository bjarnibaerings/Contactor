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
        alignSelf: "center",
        textAlign: "center",
        padding: 28
    },
    buttonText:{
        fontSize: 18,
        color: "white",
        textAlign: "center",
        margin: 10,
        padding: 10
    },
    button: {
        padding: 5,
        borderRadius: 100,
        textAlign: "center",
        color: "white",
        borderColor: "aquamarine",
        backgroundColor: "aquamarine",
        alignSelf: "center",
        width: 300,
        marginBottom: 30
    }
});

export default styles;