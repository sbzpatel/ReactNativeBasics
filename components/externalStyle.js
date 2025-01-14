import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: scale(26),
        color: "green",
        alignSelf: "center",
        marginBottom: scale(20),
        marginTop: scale(25),
    },
    data: {
        fontSize: scale(22),
        paddingLeft: scale(10),
        fontWeight: scale(200),
        color: "black"
    },
    textInput: {
        backgroundColor: "white",
        paddingLeft: scale(17),
        margin: scale(10),
        borderRadius: scale(5),
        borderWidth: scale(2),
        fontSize: scale(18),
        color: "#183833"
    },
    buttonContainer: {
        margin: scale(15),
        width: "95%"
    },
    platformDisplay: {
        position: "absolute",
        top: 0,
        bottom: 0,
    },
    tinyLogo: {
        width: scale(50),
        height: verticalScale(50),
        alignSelf: "center",
        marginVertical: scale(55)
    },
    customBtn: {
        textAlign: "center",
        color: "#fff",
        margin: scale(15),
        padding: scale(15),
        fontSize: scale(22),
        borderRadius: scale(7),
        shadowOpacity: scale(0.6),
        shadowColor: "#000",
        shadowOffsetWidth: scale(10),
        shadowOffsetHeight: scale(10),
        shadowRadius: scale(10),
        elevation: scale(10),
        fontWeight: scale(700),
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: "#dddce0",
        alignItems: "center",
        justifyContent: "center"
    },
    modalView: {
        flexDirection: "column",
        backgroundColor: "white",
        height: verticalScale(100),
        width: scale(200),
        padding: scale(15),
        justifyContent: "space-between",
        borderRadius: scale(5)
    },
    modalText: {
        textAlign: "center",
        fontSize: scale(18)
    },
    fadingContainer: {
        padding: scale(20),
        backgroundColor: "powderblue",
        margin: scale(15)
    },
    fadingText: {
        fontSize: scale(28)
    }
})