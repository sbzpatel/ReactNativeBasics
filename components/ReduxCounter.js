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