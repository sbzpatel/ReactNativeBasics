import { View, Text, Button, TouchableOpacity, TextInput, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import externalStyle from './externalStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MyAsyncStorage = () => {
    const [name, setName] = useState("");
    const [savedName, setSavedName] = useState("");

    const saveUser = async () => {
        await AsyncStorage.setItem("authorName", name);

        if (name == "") {
            Alert.alert("Please enter Username first.");
        } else {
            setName("");
            Alert.alert("Username successfully saved.");
        }
    }

    const getUser = async () => {
        const userName = await AsyncStorage.getItem("authorName");

        if (userName) {
            setSavedName(userName);

            ToastAndroid.show("Username fetched successfully", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Username not found", ToastAndroid.SHORT);
        }
    }

    const removeUser = async () => {
        await AsyncStorage.removeItem("authorName");

        if (savedName == "") {
            ToastAndroid.show("No Username found to remove", ToastAndroid.SHORT);
        } else {
            setSavedName("");

            ToastAndroid.show("Username removed successfully", ToastAndroid.SHORT);
        }
    }

    return (
        <View>
            <Text style={[externalStyle.heading, { fontSize: scale(24), color: "#045427" }]}>RN MyAsyncStorage</Text>

            <TextInput
                placeholder='Enter Username'
                style={{ margin: scale(15), padding: scale(15), borderRadius: scale(7), borderColor: "grey", borderWidth: scale(1), fontSize: scale(15) }}
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TouchableOpacity
                onPress={saveUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#400631", color: "#fa5305" }}>Save Username</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={getUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#400631", color: "#fa5305" }}>Get Username</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={removeUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#400631", color: "#fa5305" }}>Remove Username</Text>
            </TouchableOpacity>

            <Text style={{ margin: scale(15), fontSize: scale(24), color: "#fa5305" }}>Stored Username: {savedName}</Text>
        </View>
    )
}

export default MyAsyncStorage