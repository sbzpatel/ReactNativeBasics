import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MyShadowBox = () => {
  return (
    <View style={styles.container}>
      <Text style={[externalStyle.heading, { fontSize: scale(24) }]}>Box Shadow in React Native</Text>
      <View style={styles.box}>
      </View>

      <TouchableOpacity style={externalStyle.buttonContainer}>
        <Text style={[externalStyle.customBtn, {backgroundColor: "#4c5c12"}]}>Submit Form</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Shahbaz Patel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: verticalScale(150),
    width: scale(150),
    backgroundColor: "green",
    shadowColor: "yellow",
    shadowOpacity: 0.6,
    shadowOffset: {
      width: scale(10),
      height: scale(10)
    },
    shadowRadius: scale(10),
    elevation: scale(10)     // without elevation property cannot reflect the shadown in android side
  },
  heading: {
    color: "red",
    fontSize: 34,
    fontWeight: 700,
    textShadowColor: "grey",
    ShadowOpacity: 0.6,
    textShadowOffset: {
      width: 0.7,
      height: 0.7
    },
    textShadowRadius: 0.7
  }
})

export default MyShadowBox

