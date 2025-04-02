// Context API is a React hooks(createContext, useContext) used to share data across multiple components without passing props manually through each level of component's tree. It solves the problem of "Prop drilling".
// Prop drilling is a process of passing data(props) from a parent component down to deeply nested child components through multiple intermediate components which components don't directly use these props. 
// So this situation leads to unnecessary code complexity & reduced code maintainability which can be solved by Context API Method.


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