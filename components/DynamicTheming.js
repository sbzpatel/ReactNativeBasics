import React from 'react'
import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function DynamicTheming() {
    const currentTheme = useColorScheme() === "dark";

    return (
        <View style={[currentTheme ? styles.darkTheme : styles.lightTheme, { justifyContent: "center", alignItems: "center" }]}>
            <Text style={[externalStyle.heading, { fontSize: scale(15), padding: scale(5) }]}>Dynamic Theming using useColorScheme()</Text>

            <Text style={[{ fontSize: scale(24) }, currentTheme ? { color: 'white' } : { color: 'black' }, { textAlign: "center" }]}>Shahbaz Patel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    darkTheme: {
        backgroundColor: "black",
        height: verticalScale(200),
        width: "93%",
        margin: scale(13)
    },
    lightTheme: {
        backgroundColor: "white",
        height: verticalScale(200),
        width: scale("93%"),
        margin: scale(13)
    }
})

export default DynamicTheming