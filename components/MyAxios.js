import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import externalStyle from './externalStyle'
import axios from 'axios';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default class MyAxios extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        console.log("componentDidMount run..");
        this.getAPIData();
    }

    async getAPIData() {
        const response = await axios.get("https://reactnative.dev/movies.json");
        console.warn(response.data.movies);

        this.setState({ data: response.data.movies });
    }

    async postData() {
        let resp = await axios.post("https://dummyjson.com/posts/add",
            {
                title: "I am a great coder SBZ...",
                userId: 6
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        );

        console.warn(resp.data);
    }

    render() {
        return (
            <View>
                <Text style={[externalStyle.heading, { color: "#04788f" }]}>MovieList API | Axios</Text>
                {
                    this.state.data.length > 0 ?
                        <View>
                            {
                                this.state.data.map((item) => <View style={styles.box} key={item.id}><Text style={styles.text}>{item.title}</Text></View>)
                            }
                        </View> :
                        <Text>Data is loading...</Text>
                }

                <TouchableOpacity
                    onPress={this.postData}
                >
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#982fde" }}>POST Data</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        margin: scale(15),
        padding: scale(20),
        backgroundColor: "#024f5e",
        borderRadius: scale(10)
    },
    text: {
        textAlign: "center",
        fontSize: scale(17),
        fontWeight: scale(500),
        color: '#fff'
    }
})