import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, Pressable, TouchableWithoutFeedback } from 'react-native'
import externalStyle from './externalStyle';

function Touchables() {

    return (
        <View>
            <TouchableOpacity
                onPress={() => console.warn("Hello Shahbaz, you did it finally!!!!!")}
                onLongPress={() => console.warn("On Long Press Button.")}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#982fde" }}>TouchableOpacity Button</Text>
            </TouchableOpacity>

            <TouchableHighlight
                onPress={() => console.warn("Hello Shahbaz, you did it finally!!!!!")}
                onLongPress={() => console.warn("On Long Press Button.")}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#152da3" }}>TouchableHighlight Button</Text>
            </TouchableHighlight>

            <Pressable
                onPress={() => console.warn("Hello Its Pressable Button u pressed...")}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#6bf211" }}>Pressable Button</Text>
            </Pressable>

            <TouchableWithoutFeedback
                onPress={() => console.warn("Hello Its TouchableWithoutFeedback Button u pressed...")}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#02f7db" }}>TouchableWithoutFeedback Button</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Touchables