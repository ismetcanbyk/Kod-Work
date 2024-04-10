import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");

export default StyleSheet.create({

    card: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: 'flex-start',
        width: dimensions.width * 0.95,

        padding: 10,
        margin: 10,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    cardBody: {
        fontSize: 16,
        fontWeight: "normal",
        marginBottom: 2,
        marginTop: 2,
    },
    locationContainer: {
        width: 'auto',
        backgroundColor: '#ef5350',
        borderRadius: 50,
        padding: 3,
        paddingEnd: 9,
        paddingStart: 9,
        marginTop: 3,
    },
    location: {
        color: '#fff',
        fontWeight: 'bold',
    },
    levelContainer: {
        width: 'auto',
        alignSelf: 'flex-end',
    },
    level: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#ef5350',

    },
    customButton: {
        alignSelf: 'center',
    }
});