// useCallback is a React Native's performance optimization hook that helps to memoize functions, which are only re-call when it required to call.


import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, memo, useCallback, useMemo } from 'react'
import externalStyle from './externalStyle';
import ChildA from './ChildA';

const MyUseCallBack = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const handleCountInc = () => {
        console.log("handleCountInc calling...");

        setCount(count + 1);
    }

    const learning = useCallback(() => {
        console.log("learning calling...");
    }, [item])

    return (
        <View style={externalStyle.container}>
            <Text style={externalStyle.heading}>RN useCallBack</Text>

            <Text style={{ fontSize: 24, color: "#ff4d4d" }}>Count: {count}</Text>

            <ChildA learning={learning} item={item} />

            <View style={{ width: "95%" }}>
                <TouchableOpacity
                    onPress={handleCountInc}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ff4d4d", color: "#ffffff" }}>Increment Count</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: "95%" }}>
                <TouchableOpacity
                    onPress={() => setItem(item + 2)}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ff4d4d", color: "#ffffff" }}>Increment Count by 2</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MyUseCallBack