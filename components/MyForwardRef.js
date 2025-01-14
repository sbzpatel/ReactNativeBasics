import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import MyInput from './MyInput';

const MyForwardRef = () => {
    const input = useRef();

    const handlePress = () => {
        input.current.setNativeProps({
            text: "Shahbaz Patel",
            backgroundColor: "#ccccb3",
            color: "#fff"
        })
    }

    return (
        <View style={styles.container}>
            <Text style={externalStyle.heading}>RN ForwardRef</Text>

            <MyInput ref={input} />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Submit to Change Text</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: scale(20)
    },
    input: {
        width: "100%",
        height: verticalScale(50),
        backgroundColor: "#fff",
        borderRadius: scale(10),
        paddingHorizontal: scale(15),
        fontSize: scale(18),
        borderStyle: "solid",
        borderWidth: scale(2),
        borderColor: "#000",
        marginBottom: scale(20)
    },
    button: {
        width: "100%",
        height: verticalScale(50),
        backgroundColor: "#002dff",
        borderRadius: scale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: scale(18),
        fontWeight: "bold"
    }
})

export default MyForwardRef