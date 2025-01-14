import React from 'react'
import { View, Text, Linking, TouchableOpacity } from 'react-native'
import externalStyle from './externalStyle'

function MyLinking() {
  return (
    <View>
      <Text style={externalStyle.heading}>RN Linking API</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL("https://google.com/")}
      >
        <Text style={{ ...externalStyle.customBtn, backgroundColor: "#fcf003", color: "#aef" }}>Linking to Google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyLinking