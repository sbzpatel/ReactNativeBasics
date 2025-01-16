import React from 'react'
import { StyleSheet, View, Text, ScrollView, RefreshControl } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import externalStyle from './externalStyle';

function Transforms() {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        console.log("handleRefresh calling...");
    
        setRefreshing(true);
    
        setTimeout(() => {
          setRefreshing(false);
        }, 3000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    color={["red", "green", "blue"]}
                />
            }
        >
            <Text style={{ ...externalStyle.heading, fontWeight: scale(500), /*color: darktheme ? "#fff" : "green"*/ }}>RN Tranforms</Text>

            <View style={styles.box}>
                <Text style={styles.text}>Original Object</Text>
            </View>

            <View style={[styles.box, { transform: [{ scale: 1.5 }] }]}>
                <Text style={styles.text}>Scale by 1.5</Text>
            </View>

            <View style={[styles.box, { transform: [{ scaleX: 1.5}] }]}>
                <Text style={styles.text}>ScaleX by 1.5</Text>
            </View>

            <View style={[styles.box, { transform: [{ scaleY: 1.5 }] }]}>
                <Text style={styles.text}>ScaleY by 1.5</Text>
            </View>

            <View style={[styles.box, { transform: [{ rotate: "45deg" }] }]}>
                <Text style={styles.text}>Rotate 45 degree</Text>
            </View>

            <View style={[styles.box, { transform: [{ rotate: "90deg" }] }]}>
                <Text style={styles.text}>Rotate 90 degree</Text>
            </View>

            <View style={[styles.box, { transform: [{ rotate: "180deg" }] }]}>
                <Text style={styles.text}>Rotate 180 degree</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        height: verticalScale(100),
        width: scale(100),
        borderRadius: scale(5),
        marginVertical: scale(40),
        backgroundColor: '#61dafb',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: scale(14),
        fontWeight: 'bold',
        margin: scale(8),
        color: '#000',
        textAlign: 'center',
    }
})

export default Transforms