import { StyleSheet, Dimensions } from "react-native";

const {Width: WinWidth} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 18,
        backgroundColor: 'white'
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "white"

    },
    input:{
        borderWidth: 1,
        borderColor: "aqua",
        borderRadius: 2,
        padding: 12,
        margin: 18,
        fontSize: 16,
        backgroundColor: "aquamarine"
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
        borderColor: "aqua",
        textAlign: "center",
        color: "white",
    },
    buttonText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "aqua"
    }
});