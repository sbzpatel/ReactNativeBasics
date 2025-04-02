// The Fetch API is a modern interface in javascript that allow to make HTTP Request.
// It replace the older XMLHTTPRequest method and provides cleaner and more flexible way to fetch resources asynchronously.
// Here Fetch API used promise object or async-await function to work with asynchronous data handling operations.

// Syntax:
// 		fetch(url, option)
// 			.then((result) => result.json())
// 			.then((data) => console.log(data))
// 			.catch((err) => console.log("Error:", err))
			
// 		a) url ->> The API endpoint from where data is fetched.
// 		b) options (optional) ->> Specifies method, headers, body, etc.
// 		c) result.json() ->> It parse the result as JSON.
// 		d) .catch(err) ->> handles any errors occurs during the asynchronous operation at server side.

// There are different type of methods as below, which performs different type of requests to perform a tasks:
	
// 	1) Basic Fetch (GET)Method:
// 		Its a simple Get method used to fetch data from an API.
		
// 	2) POST Method:
// 		POST Method is used to submit data with body and headers.
		
// 	3) PUT Method:
// 		PUT Method is used to update the existing data by passing id refrence, body and headers.
		
// 	4) DELETE Method:
// 		DELETE Method used to delete the existing data by passing id refrence to the URL.


import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import externalStyle from './externalStyle'
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
                <Text style={[externalStyle.heading, { fontSize: scale(38) }]}>API Result</Text>
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