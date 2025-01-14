import React, { memo } from "react"
import { View, Text } from "react-native"

const ChildA = ({ learning, item }) => {
    console.log("ChildA Calling....")

    learning();
    return (
        <View style={{ width: "100%", backgroundColor: "brown", padding: 15 }}>
            <Text style={{ fontSize: 22, color: "#fff", textAlign: "center" }}>ChildA {item}</Text>
        </View>
    )
}

export default memo(ChildA);