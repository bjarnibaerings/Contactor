import { StyleSheet, Dimensions } from "react-native";


const {Width: WinWidth} = Dimensions.get("window");

export default StyleSheet.create({
    Container:{
        flex: 1,
        padding: 20,
        flexDirection: "column",
        alignSelf: "center"
    },
    ImageContainer:{
        width:100,
        height:100,
        resizeMode: "cover",
        borderRadius: 40
    },
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
    },
    ButtonContainer:{
        alignSelf: "center",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    manageButton:{
        alignSelf: "center",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom:-700,
    },
    boarderContainer:{
        flex: 1,
        padding: 20,
        flexDirection: "row"
    },
    titleName:{
        fontSize:20,
        marginTop: 40,
        marginLeft: 20
    },
    textInput: {
        borderWidth: 2,
        borderColor: "black",
        height: 30,
        backgroundColor: "aliceblue"
    },
    listContainer: {
        maxHeight: 650
    }
});