// React Native Touchable is a component which makes component or it parts touchable.
// On press event generation on Touchables, showing visual feedback in response like darkened background color, change the opacity.
// There are 3 types of Touchables are as follows,
// 1) TouchableHighlight - Its a touchable area and its background will be darkened when the user press down on this part.
// 2) TouchableOpacity - Its a touchable area, once user press then changes the opacity of that area in its feedback.
// 3) TouchableWithoutFeedback - Its a touchable area which don't have any responsive feedback in response of press event.


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