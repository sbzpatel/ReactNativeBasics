import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useRef, forwardRef } from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const MyInput = (props, ref) => {

    return (
        <>
            <TextInput
                placeholder='Enter your name'
                style={styles.input}
                placeholderTextColor={"grey"}
                ref={ref}
            />
        </>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default forwardRef(MyInput);