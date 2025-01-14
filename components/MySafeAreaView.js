import React from 'react'
import {StyleSheet, Text, SafeAreaView} from 'react-native';

function MySafeAreaView() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  )
}

export default MySafeAreaView