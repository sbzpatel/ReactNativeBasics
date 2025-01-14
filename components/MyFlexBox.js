import React from 'react'
import { View, Text } from 'react-native'
import externalStyle from './externalStyle'

function MyFlexBox() {
  return (
    <View style={{ backgroundColor: "red", height: 840, width: "100%" }}>
      <View style={{ width: "100%", height: 100 }}>
        <Text style={[externalStyle.heading, {color: "#fff"}]}>RN Flex Box</Text>
      </View>

      <View style={{ flex: 2, backgroundColor: "orange", flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        <View style={{ flex: 1, backgroundColor: "brown" }}></View>
        <View style={{ flex: 1, backgroundColor: "black" }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 3, backgroundColor: "pink" }}></View>
      <View style={{ flex: 1, backgroundColor: "#05fa7b", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
        <View style={{ height: 80, width: 80, backgroundColor: "#062b3d" }}></View>
        <View style={{ height: 80, width: 80, backgroundColor: "#06093d" }}></View>
        <View style={{ height: 80, width: 80, backgroundColor: "#555de0" }}></View>
      </View>
    </View>
  )
}

export default MyFlexBox