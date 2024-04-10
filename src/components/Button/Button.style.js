import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 20,
        justifyContent: "center",
    },
    subContainer: {
        flexDirection: "column",
        flex: 0.5,
    },

    button: {
        flexDirection: "row",
        backgroundColor: "#ef5350",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        marginLeft: 10,
        textAlign: "center",
    },
});