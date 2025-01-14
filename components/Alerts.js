import React from 'react'
import { View, Text, Button, Alert, TouchableOpacity, ToastAndroid } from "react-native"
import externalStyle from './externalStyle'

const Alerts = () => {
    const createTwoButtonAlert = () => {
        Alert.alert("Success", "Alert showing successfully.", [
            { text: "Cancel", onPress: () => ToastAndroid.show("User pressed Cancel on TwoButtonAlert", ToastAndroid.SHORT) },
            { text: "Ok", onPress: () => ToastAndroid.show("User pressed Ok on TwoButtonAlert", ToastAndroid.SHORT) }
        ]);
    }

    const createThreeButtonAlert = () => {
        Alert.alert("Success", "Alert showing successfully.", [
            { text: "Ask me later", onPress: () => ToastAndroid.show("User pressed Always Ask me later on ThreeButtonAlert", ToastAndroid.SHORT) },
            { text: "Cancel", onPress: () => ToastAndroid.show("User pressed Cancel on TwoButtonAlert", ToastAndroid.SHORT) },
            { text: "Ok", onPress: () => ToastAndroid.show("User pressed Ok on TwoButtonAlert", ToastAndroid.SHORT) }
        ]);
    }

    return (
        <View>
            <View style={externalStyle.buttonContainer}>
                <TouchableOpacity onPress={createTwoButtonAlert}>
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ed0510", fontWeight: 700 }}>2-Button Alert</Text>
                </TouchableOpacity>
            </View>

            <View style={externalStyle.buttonContainer}>
                <TouchableOpacity onPress={createThreeButtonAlert}>
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ed0510", fontWeight: 700 }}>3-Button Alert</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Alerts