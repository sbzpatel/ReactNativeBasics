import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native"
import externalStyle from "./externalStyle"

class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.name = "Shahbaz Patel";

        this.bioData = {
            qualification: "BE.IT",
            place: "Pune",
            dobYear: "1989"
        }
    }

    saveUser = () => {
        ToastAndroid.show("User data saved successfully!", ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View>
                    <Text style={externalStyle.heading}>RN Class Component</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>{this.name}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Qualification</Text>
                    <Text style={styles.text}>{this.bioData.qualification}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Place</Text>
                    <Text style={styles.text}>{this.bioData.place}</Text>
                </View>

                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Birth Year</Text>
                    <Text style={styles.text}>{this.bioData.dobYear}</Text>
                </View>

                <TouchableOpacity
                    style={{ width: "99%" }}
                    onPress={this.saveUser}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "red", color: "#fff" }}>Save Data</Text>
                </TouchableOpacity>
            </View>
        )
    }
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

export default ClassComponent;