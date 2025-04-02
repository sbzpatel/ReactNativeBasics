// High-Order Component(HOC) simply takes the one component as a props and return new components with enhanced features, which is an advanced method of reusing the component functionality logic. 


import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import externalStyle from './externalStyle'

const MyHOC = () => {
  return (
    <View>
      <Text style={{...externalStyle.heading, backgroundColor: "grey", width: "100%", textAlign: "center"}}>MyHOC</Text>
      <HOCGreen cmp={Counter} />
      <HOCOrange cmp={Counter} />
    </View>
  )
}

const HOCGreen = (props) => {
    return (
        <View style={{backgroundColor: "green", paddingBottom: 40}}>

            <Text style={{...externalStyle.heading, color: "#fff"}}>Green HOC</Text>
            <View style={{width: "100%"}}>
                <props.cmp />
            </View>
        </View>
    )
}

const HOCOrange = (props) => {
    return (
        <View style={{backgroundColor: "orange", paddingBottom: 40}}>

            <Text style={{...externalStyle.heading, color: "#fff"}}>Orange HOC</Text>
            <View style={{width: "100%"}}>
                <props.cmp />
            </View>
        </View>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text style={{...externalStyle.heading, color: "#fff", fontWeight: "800"}}>{count}</Text>

            <TouchableOpacity onPress={()=>setCount(count+1)}>
                <Text style={{...externalStyle.customBtn, backgroundColor: "black"}}>Increment Counter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyHOC