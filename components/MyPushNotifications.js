import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import externalStyle from './externalStyle'
import notifee, { AndroidStyle } from '@notifee/react-native'

const MyPushNotifications = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification in Sbz Basic',
      body: 'Sbz notify you through his basic react native application with image',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        style: { type: AndroidStyle.BIGPICTURE, picture: 'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blta1fa5a00559c5247/6668d5f934f06610e59987fa/Sunflower_care_hero.jpg?q=70&width=1200&auto=webp' }
      },
    });
  }

  return (
    <View style={externalStyle.container}>
      <Text style={externalStyle.heading}>RN Push Notifications(Local)</Text>

      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={onDisplayNotification}
      >
        <Text style={styles.button}>Get Notification</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 30,
    color: "green",
    textAlign: "center",
    marginTop: 40
  },
  button: {
    backgroundColor: "#14db9f",
    color: "white",
    padding: 15,
    margin: 15,
    borderRadius: 7,
    textAlign: "center",
    fontSize: 22
  }
})

export default MyPushNotifications