import React from 'react'
import { View, Text, Image } from 'react-native'
import externalStyle from './externalStyle'

function Images() {
  return (
    <View>
      <Text style={externalStyle.heading}>RN Image</Text>
      
      <Image
        style={externalStyle.tinyLogo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      <Image
        style={externalStyle.tinyLogo}
        source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" }}
      />

      <Image
        style={externalStyle.tinyLogo}
        source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" }}
      />
    </View>
  )
}

export default Images