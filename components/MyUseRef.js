// The useRef is a built-in React hook that returns a mutable reference object which persists across renders.
// Unlike state variables, updating a ref does not trigger a component re-render.


// Uncontrolled components are the components that do not rely on the React State to update the component, but are handled through DOM(Document Object Model) manipulations using React hook "useRef".  


import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function MyUseRef() {
    const input = useRef();

    const handlePress = () => {
        console.log("handlePress calling...");

        input.current.setNativeProps({
            text: "Shahbaz Patel",
            backgroundColor: "lightgrey",
            color: "green",
            fontWeight: "500"
        })
        input.current.focus();
    }

    return (
        <View style={styles.container}>
            <Text style={[externalStyle.heading, { fontSize: scale(22) }]}>Box Shadow in React Native</Text>
            
            <TextInput 
                style={styles.input}
                placeholder='Enter your name'
                placeholderTextColor={"grey"}
                ref={input}
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Autofill Name</Text>
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
        borderRadius: scale(7),
        paddingHorizontal: scale(15),
        fontSize: scale(16),
        borderStyle: "solid",
        borderWidth: scale(1),
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

export default MyUseRef;