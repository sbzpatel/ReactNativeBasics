import { View, Text } from 'react-native'
import React from 'react'
import externalStyle from './externalStyle'

const MyView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "pink" }}>
      <Text style={{...externalStyle.heading, color: "#535955"}}>MyView</Text>
    </View>
  )
}

export default MyView