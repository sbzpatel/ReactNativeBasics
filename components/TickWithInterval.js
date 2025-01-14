import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import externalStyle from './externalStyle'

const TickWithInterval = (children) => {
    const [tick, setTick] = useState(0);

    let timer;

    useEffect(() => {
        timer = setInterval(function () {
            setTick(tick + 1);
        }, 1000);
    }, [tick])



    const handleClearTimer = () => {
        console.warn("Interval Cleared..");
        clearInterval(timer);
        clearAllIntervals();
        setTick(0);
    }

    return (
        <View>
            <Text style={[externalStyle.heading, { color: "#06495c" }]}>Seconds Counting: {tick}</Text>

            <TouchableOpacity onPress={handleClearTimer}>
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#06495c", color: "#ffffff" }}>Clock with Ticking using Interval</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TickWithInterval