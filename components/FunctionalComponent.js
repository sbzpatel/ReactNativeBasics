import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Button } from "react-native"
import externalStyle from "./externalStyle"

const FunctionalComponent = () => {
    const name = "Kaleem Patel";

    const bioData = {
        qualification: "BCA",
        place: "Kolhapur",
        dobYear: "1988"
    }

    const saveUser = () => {
        ToastAndroid.show("User's data saved successfully!", ToastAndroid.SHORT);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <Text style={externalStyle.heading}>RN Functional Component</Text>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>{name}</Text>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.text}>Qualification</Text>
                <Text style={styles.text}>{bioData.qualification}</Text>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.text}>Place</Text>
                <Text style={styles.text}>{bioData.place}</Text>
            </View>

            <View style={styles.viewContainer}>
                <Text style={styles.text}>Birth Year</Text>
                <Text style={styles.text}>{bioData.dobYear}</Text>
            </View>

            <TouchableOpacity
                style={{ width: "99%" }}
                onPress={saveUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "red", color: "#fff" }}>Save Data</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-around",
        borderWidth: 1,
        borderColor: "grey",
        padding: 15,
        width: "90%",
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: "#ebebe0",
    },
    text: {
        fontSize: 19,
        color: "grey",
        fontWeight: 300,
        color: "#f45"
    }
})

export default FunctionalComponent;
