import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function MyFlatList() {
    const friends = [
        { id: 1, name: "Shahbaz" },
        { id: 2, name: "Kaleem" },
        { id: 3, name: "Zuber" },
        { id: 4, name: "Badreaalam" },
        { id: 5, name: "Ilham" },
        { id: 6, name: "Maghfir" }
    ]

    return (
        <View>
            <Text style={externalStyle.heading}>My Friend's List</Text>
            
            <FlatList
                data={friends}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box} key={item.id}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )
                }}
            />

            {/* {
                friends.map((friend) => <View style={styles.box} key={friend.id}>
                    <Text style={styles.text}>{friend.name}</Text>
                </View>
                )
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: verticalScale(10),
        marginHorizontal: scale(30),
        padding: scale(20),
        backgroundColor: "skyblue",
        borderRadius: scale(10),
        shadowOpacity: 0.6,
        shadowColor: "#000",
        elevation: scale(5)
    },
    text: {
        textAlign: "center",
        fontSize: scale(17),
        fontWeight: scale(600),
        color: '#4251f5',
        fontSize: scale(22)
    }
})

export default MyFlatList