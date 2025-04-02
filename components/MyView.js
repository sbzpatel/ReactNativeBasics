// View is a container that supports layout with flexbox, style, some touch handling and accessiblility controls.
// Text component is used to display text in a react native app.

import { View, Text } from 'react-native'
import React from 'react'
import externalStyle from './externalStyle'

const MyView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "hotpink" }}>
      <Text style={{...externalStyle.heading, color: "#535955"}}>MyView</Text>
    </View>
  )
}

export default MyView