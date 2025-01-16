import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, ToastAndroid } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import externalStyle from './externalStyle';

const Keyyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState("Keyboard Hide");

  const keyboardListeners = () => {
    const keybrdShow = Keyboard.addListener("keyboardDidShow", () => {
      // ToastAndroid.show("keyboard Showed successfully...", ToastAndroid.SHORT);
      setKeyboardStatus("Keyboard showed");
    });

    const keybrdHide = Keyboard.addListener("keyboardDidHide", () => {
      // ToastAndroid.show("keyboard hided successfully...", ToastAndroid.SHORT);
      setKeyboardStatus("Keyboard hide");
    });

    return () => {
      keybrdShow.remove();
      keybrdHide.remove();
    }
  }

  useEffect(() => {
    keyboardListeners();
  }, []);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
      <Text style={externalStyle.heading}>RN Keyboard API</Text>

      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholder="Click here…"
          // onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      { keyboardStatus === "Keyboard hide" ?
        <Text style={[styles.status, { color: "red" }]}>{keyboardStatus}....</Text>
        :
        <Text style={[styles.status, { color: "green" }]}>{keyboardStatus}....</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: scale(15),
    borderWidth: scale(0.5),
    borderRadius: scale(4),
    fontSize: scale(16)
  },
  status: {
    padding: scale(16),
    textAlign: 'center',
    fontSize: scale(24)
  },
});

export default Keyyboard