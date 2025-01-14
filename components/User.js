import React, { useCallback, useState } from 'react'
import { Linking, View, Text, StyleSheet, TextInput, Button, ScrollView, ActivityIndicator, Image, TouchableHighlight, TouchableOpacity, Pressable, Modal, RefreshControl, TouchableWithoutFeedback, Alert, Animated, useAnimatedValue, ToastAndroid } from 'react-native'
import externalStyle from './externalStyle'

const User = (props) => {
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);

    return (
        <View>
            <Text style={externalStyle.heading}>RN Props</Text>

            <View style={{ margin: 15 }}>
                <Text style={externalStyle.data}>Name: {name}</Text>
                <Text style={externalStyle.data}>Age: {age}</Text>
            </View>

            <View style={{ margin: 15 }}>
                <TextInput
                    placeholder='Enter Name'
                    style={externalStyle.textInput}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    autoFocus
                    cursorColor={"green"}
                    editable={false}
                />

                <TextInput
                    placeholder='Enter Age'
                    style={externalStyle.textInput}
                    value={age}
                    onChangeText={(text) => setAge(text)}
                />
            </View>

            <View style={{ margin: 10 }}>
                <TouchableOpacity
                    onPress={() => ToastAndroid.show("User data saved successfully.", ToastAndroid.LONG)}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#04332b" }}>Submit Form</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default User