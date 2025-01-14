import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

export const CounterContext = createContext();

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        setCount(count + 1);
    }

    const handleDecrementCount = () => {
        setCount(count - 1);
    }

    const counterReset = () => {
        setCount(0);
    }

    return (
        <CounterContext.Provider value={{ count, handleIncrementCount, handleDecrementCount, counterReset }}>
            <FirstChild />
        </CounterContext.Provider>
    )
}

export default Parent