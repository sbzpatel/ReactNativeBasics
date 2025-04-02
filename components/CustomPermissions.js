// "PermissionsAndroid" API is used to access Android M's new permission model.
// According to this model, normal persmissions are granted by default when the application is installed as long as they appear in "AndroidManifest.xml" file.
// However, "dangerous" permissions require a dialog prompt to get user's permission. So to call these dialog prompt in android devices we are using "PermissionsAndroid" module of React Native.


import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, PermissionsAndroid } from 'react-native'
import externalStyle from './externalStyle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function CustomPermissions() {
    const requestCameraPermission = async () => {
        try {
            console.log("requestCameraPermission calling...");

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.item}>Try Permissions</Text>
            <TouchableOpacity
                onPress={requestCameraPermission}
            >
                <Text style={{ ...styles.customBtn, backgroundColor: "#7d5451" }}>Camera Permission</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ecf0f1',
        padding: scale(8)
    },
    item: {
        margin: scale(24),
        fontSize: scale(18),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    customBtn: {
        textAlign: "center",
        color: "#fff",
        margin: scale(15),
        padding: scale(15),
        fontSize: scale(22),
        borderRadius: scale(5),
        shadowColor: "skyblue",
        elevation: scale(0.4),
        shadowOffset: scale(10)
    },
});

export default CustomPermissions