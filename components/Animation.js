import { View, Text, TouchableOpacity, StyleSheet, useAnimatedValue, Animated } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import externalStyle from './externalStyle';

const Animation = () => {
    const animOpac = useAnimatedValue(0);

    const fadeIn = () => {
        // console.warn("fadeIn calling...");

        Animated.timing(animOpac, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }

    const fadeOut = () => {
        // console.warn("fadeIn calling...");

        Animated.timing(animOpac, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container}>
            <Text style={externalStyle.heading}>RN Animated API</Text>

            <Animated.View style={[styles.box, { opacity: animOpac }]}>
                <Text style={styles.boxText}>Animation Box</Text>
            </Animated.View>

            <TouchableOpacity onPress={fadeIn}>
                <Text style={[externalStyle.customBtn, { backgroundColor: "#078ded" }]}>Fade In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={fadeOut}>
                <Text style={[externalStyle.customBtn, { backgroundColor: "#8fc5eb" }]}>Fade Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: scale(20)
    },
    box: {
        width: scale("100%"),
        height: verticalScale(150),
        backgroundColor: "#10e02c",
        justifyContent: "center",
        borderRadius: scale(7),
        margin: scale(15)
    },
    boxText: {
        color: "#ebd93f",
        textAlign: "center",
        fontSize: scale(34)
    },
    button: {
        marginTop: scale(10),
        color: "#fff",
        padding: scale(10),
        textAlign: "center",
        fontSize: scale(17),
        borderRadius: scale(7)
    }
})

export default Animation