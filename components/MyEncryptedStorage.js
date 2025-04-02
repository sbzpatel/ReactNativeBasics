// EncryptedStorage is an encrypted, asynchronous, persists & key-value storage system which is global to the app.


import { View, Text, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import externalStyle from './externalStyle'
import EncryptedStorage from 'react-native-encrypted-storage';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MyEncryptedStorage = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [savedData, setSavedData] = useState({ name: "", password: "" });

    const saveUser = async () => {
        const data = { name: name, password: password };
        // await AsyncStorage.setItem("authorName", name);
        await EncryptedStorage.setItem("authorName", JSON.stringify(data));

        // console.log("set data ->>",status);

        if (name === "" || password === "") {
            Alert.alert("Please enter Username/Password first.");
        } else {
            setName("");
            setPassword("");
            Alert.alert("Username successfully saved.");
        }
    }

    const getUser = async () => {
        // const userName = await AsyncStorage.getItem("authorName");
        const data = await EncryptedStorage.getItem("authorName");

        var encodedData = JSON.parse(data);

        if (encodedData.name !== "" && encodedData.password !== "") {
            setSavedData({ name: encodedData.name, password: encodedData.password });

            ToastAndroid.show("Username & Password fetched successfully", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Username not found", ToastAndroid.SHORT);
        }
    }

    const removeUser = async () => {
        // await AsyncStorage.removeItem("authorName");
        const data = await EncryptedStorage.removeItem("authorName");

        setSavedData({ name: "", password: "" });

        ToastAndroid.show("Username & Password removed successfully", ToastAndroid.SHORT);

        // console.log("data removed ->> ", data.name)

        // if (data.name !== undefined) {
        //     ToastAndroid.show("No Username/Password found to remove", ToastAndroid.SHORT);
        // } else {
        //     setSavedData({name: "", password: ""});


        // }
    }

    return (
        <View>
            <Text style={[externalStyle.heading, { fontSize: scale(24), color: "#045427" }]}>RN MyEncryptedStorage</Text>

            <TextInput
                placeholder='Enter Username'
                style={{ margin: scale(15), padding: scale(15), borderRadius: scale(7), borderColor: "grey", borderWidth: scale(1), fontSize: scale(15) }}
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                placeholder='Enter Password'
                style={{ margin: scale(15), padding: scale(15), borderRadius: scale(7), borderColor: "grey", borderWidth: scale(1), fontSize: scale(15) }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <TouchableOpacity
                onPress={saveUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#1b5207", color: "#9ac41b" }}>Save Username</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={getUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#1b5207", color: "#9ac41b" }}>Get Username</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={removeUser}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#1b5207", color: "#9ac41b" }}>Remove Username</Text>
            </TouchableOpacity>

            <Text style={{ margin: scale(15), fontSize: scale(24), color: "#045427" }}>Stored Data:</Text>
            <Text style={{ marginLeft: scale(15), fontSize: scale(18), marginBottom: scale(7), color: "#045427" }}>Name: {savedData.name}</Text>
            <Text style={{ marginLeft: scale(15), fontSize: scale(18), marginBottom: scale(7), color: "#045427" }}>Password: {savedData.password}</Text>
        </View>
    )
}

export default MyEncryptedStorage