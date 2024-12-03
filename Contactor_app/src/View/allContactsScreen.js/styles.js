import { StyleSheet, Dimensions } from "react-native";


const {Width: WinWidth} = Dimensions.get("window");

export default StyleSheet.create({
    Button:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 32,
        paddingRight: 30,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "lightgray",
        shadowColor: "black",
        shadowOffset: {height: 10, width: 10},
        shadowOpacity: 0.3
    }
});