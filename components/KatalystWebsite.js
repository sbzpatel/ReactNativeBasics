// WebView is an embedded browser used to display web pages within an React Native Application.


import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const KatalystWebsite = () => {
  return <WebView source={{ uri: "https://katalystcorp.in/" }} />;
}

export default KatalystWebsite;