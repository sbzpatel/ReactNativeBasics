import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MySwitch = (props) => {
    console.warn(props.data);
    const [isEnabled, setIsEnabled] = useState(false);

    // const toggleSwitch = () => {
    //     setIsEnabled(!isEnabled);
    // }

    return (
        <View style={{ flex: 1 }}>
            <Text style={[externalStyle.heading, { fontSize: scale(34), color: props.data ? "#b8b5ab" : "#045427" }]}>React Native Switch</Text>

            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", margin: scale(15) }}>
                <Switch
                    trackColor={{ false: "grey", true: "green" }}
                    thumbColor={props.data ? "#1be060" : "#f4f3f4"}
                    value={props.data}
                    onValueChange={() => props.updateTheme(!props.data)}
                    style={{ transform: [{ scale: scale(3) }], marginHorizontal: moderateScale(30, 1.9) }}
                />

                <Text style={{ fontSize: scale(24), marginHorizontal: moderateScale(20, 0.3), fontWeight: scale(600), color: props.data ? "#ebe9e4" : "#270b57" }}>ON / OFF</Text>
            </View>
            <View style={{ marginVertical: verticalScale(50), marginHorizontal: scale(15) }}>
                <Text style={{ textAlign: "center", fontSize: scale(16), color: props.data ? "#ffffff" : "#000000" }}>Here in this app SBZ developed dark and light theme changes according to switch on/off. </Text>
            </View>
        </View>
    )
}

export default MySwitch