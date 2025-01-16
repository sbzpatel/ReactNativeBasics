import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import externalStyle from './externalStyle'

const MyUseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const handleCountInc = () => {
        console.log("handleCountInc calling...");

        setCount(count + 1);
    }

    const handleItemInc = () => {
        console.log("handleItemInc calling...");

        setItem(item + 1);
    }

    // const countUseMemo = useMemo(() => {
    //     console.log("multiCountBy5 calling...");

    //     return count * 5;
    // }, [count])

    

    const memoMultiCountBy5 = useMemo(() => {
        console.log("multiCountBy5 calling...");

        return count*5;
    }, [count]);

    return (
        <View style={externalStyle.container}>
            <Text style={externalStyle.heading}>RN useMemo</Text>

            <Text style={{ fontSize: 28, color: "violet" }}>Count: {count}</Text>
            <Text style={{ fontSize: 28, color: "violet" }}>Item: {item}</Text>
            <Text style={{ fontSize: 28, color: "violet" }}>Count multiply by 5: {memoMultiCountBy5}</Text>

            <View style={{ width: "95%" }}>
                <TouchableOpacity
                    onPress={handleCountInc}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "violet", color: "#ffffff" }}>Increment Count</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: "95%" }}>
                <TouchableOpacity
                    onPress={handleItemInc}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "violet", color: "#ffffff" }}>Increment Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyUseMemo