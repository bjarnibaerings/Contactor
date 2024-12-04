import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth } = Dimensions.get("window");

export default StyleSheet.create({
    icon:{
        width: 100,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});