// Redux is a javascript library that helps to manage the application state by providing a centralized store where developers can save and modify state, which can be share across all components or screens of an app without prop drilling that improves code reliability.

// Actions ->> Actions represent the events which happens in the application, there are objects which contain type property to identify the action, along with additional data to perform that action.

// Reducers ->> Reducers are functions responsible for handling state transition in application by taking current state and an action type as an input, and returns the new state as an output.

// Store ->> It holds the application state which is singleton object and provide methods to access these states across the components in application without prop drilling.


import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slice/counterSlice';
import externalStyle from './externalStyle';

const ReduxCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 38, marginBottom: 25, color: "#4e30a6" }}>Counter: {count}</Text>

            <TouchableOpacity onPress={() => dispatch(increment())}>
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#130736" }}>Increment Counter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(decrement())}>
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#130736" }}>Decrement Counter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(reset())}>
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#130736" }}>Reset Counter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReduxCounter