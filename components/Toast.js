import React from 'react'
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import externalStyle from './externalStyle'

function Toast() {
    const showToast = () => {
        ToastAndroid.show("You are coder dear!!!", ToastAndroid.SHORT)
    }

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity("Ohh its a great Toast to see...", ToastAndroid.SHORT, ToastAndroid.TOP)
    }

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset("A Wild Card Appeared...", ToastAndroid.LONG, ToastAndroid.TOP, 25, 50)
    }

    return (
        <View>
            <TouchableOpacity
                onPress={showToast}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#7d5451" }}>Toggle Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={showToastWithGravity}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#d6116a" }}>Toggle Toast with Gravity</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={showToastWithGravityAndOffset}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#f70717", fontSize: 22.2 }}>Toggle Toast with Gravity & Offset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Toast