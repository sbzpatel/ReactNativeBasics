import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import externalStyle from './externalStyle'
import axios from 'axios';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function MyApiCall() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // getMoviesFromApiAsync();
    }, []);

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch(
                'https://reactnative.dev/movies.json',
            );
            const json = await response.json();
            console.log("response: ", json.movies);

            setData(json.movies);

            // return json.movies;
        } catch (error) {
            console.error(error);
        }

        // fetch('https://reactnative.dev/movies.json').then((response) => {
        //     response.json().then((output) => {
        //         console.log(output.movies);

        //         setData(output.movies);
        //     })
        // })

        // axios.get("https://reactnative.dev/movies.json").then((response) => {
        //     console.log(response.data);
        //     setData(response.data.movies);
        // })
    };

    return (
        <View>
            <Text style={[externalStyle.heading, { color: "#1005e8" }]}>React Native API Calling</Text>

            <TouchableOpacity
                onPress={getMoviesFromApiAsync}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#c93b02" }}>Call API</Text>
            </TouchableOpacity>

            <View>
                <Text style={[externalStyle.heading, { fontSize: scale(24) }]}>API output</Text>
                {
                    data != [] ?
                        data.map((item) => <View key={item.id}><Text style={styles.data}>{item.title}</Text></View>)
                        :
                        <View><Text style={{ fontSize: scale(20), textAlign: "center" }}>No Data Found..</Text></View>
                }
                {/* <Text>No Data found</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    data: {
        alignSelf: "center",
        textAlign: "center", 
        fontSize: scale(24), 
        color: "red",
        textShadowColor: "#000",
        shadowOpacity: 0.2,
        textShadowOffset: {
            width: 0.3,
            height: 0.3
        },
        textShadowRadius: 3,
        elevation: 10
    }
})

export default MyApiCall