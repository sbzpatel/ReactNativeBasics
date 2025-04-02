// The useEffect hook is allow to perform side effects in functional component, like fetching data, setting up subscriptions and manipulating a DOM after component renders or re-renders.


import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import externalStyle from './externalStyle'

const MyUseEffect = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    console.log("Mounting...");

    useEffect(() => {
        console.log("useEffect Calling on count change...");
    }, [count])

    useEffect(() => {
        console.log("useEffect Calling on item change...");
    }, [item])

    const handleCountInc = () => {
        console.log("handleCountInc calling...");

        setCount(count + 1);
    }

    const handleItemInc = () => {
        console.log("handleItemInc calling...");

        setItem(item + 1);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={externalStyle.heading}>RN useEffect</Text>

            <Text style={{ ...externalStyle.heading, color: "#0be6d7" }}>Count: {count}</Text>

            <View style={{ width: "97%" }}>
                <TouchableOpacity
                    onPress={handleCountInc}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#05f595", color: "#ffffff" }}>Increment Count</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ ...externalStyle.heading, color: "#0be6d7" }}>Item: {item}</Text>

            <View style={{ width: "97%" }}>
                <TouchableOpacity
                    onPress={handleItemInc}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#05f595", color: "#ffffff" }}>Increment Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyUseEffect