import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from './Parent';
import externalStyle from '../externalStyle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SubChild = () => {
  const { count, handleIncrementCount, handleDecrementCount, counterReset } = useContext(CounterContext);

  return (
    <View>
      <Text style={{ textAlign: "center", margin: 10, fontSize: scale(36), color: "#0d0530" }}>RN Context API</Text>

      <Text style={{ textAlign: "center", margin: 10, fontSize: scale(24), fontWeight: 300 }}>Counter: {count}</Text>

      <TouchableOpacity onPress={handleIncrementCount}>
        <Text style={[externalStyle.customBtn, { backgroundColor: "#0d0530", color: "#deeb34" }]}>Increament Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDecrementCount}>
        <Text style={[externalStyle.customBtn, { backgroundColor: "#0d0530", color: "#deeb34" }]}>Decreament Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={counterReset}>
        <Text style={[externalStyle.customBtn, { backgroundColor: "#0d0530", color: "#deeb34" }]}>Reset Counter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubChild