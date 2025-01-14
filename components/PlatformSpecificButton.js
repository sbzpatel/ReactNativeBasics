import React from 'react'
import { Platform, TouchableOpacity, View, Text, ToastAndroid } from 'react-native'
import externalStyle from './externalStyle'

function PlatformSpecificButton() {
  return (
    <View>
      {Platform.OS === "android" ?
        <TouchableOpacity
          onPress={() => ToastAndroid.show("It's a android button you pressed.", ToastAndroid.SHORT)}
        >
          <Text style={{ ...externalStyle.customBtn, backgroundColor: "#071340", fontWeight: 700 }}>Android Button</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={() => ToastAndroid.show("It's a iOS button you pressed.", ToastAndroid.SHORT)}
        >
          <Text style={{ ...externalStyle.customBtn, backgroundColor: "#ed0510", fontWeight: 700 }}>iOS Button</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default PlatformSpecificButton