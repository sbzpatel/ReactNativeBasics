import { Text, ToastAndroid, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import externalStyle from './externalStyle'

export class MyComponentWillUnmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideChild: false
        }
    }

    toggleChild = () => {
        this.setState({ hideChild: !this.state.hideChild })
    }

    render() {
        return (
            <View style={externalStyle.container}>
                <Text style={[externalStyle.heading, { fontSize: 26 }]}>RN componentWillUnmount</Text>

                {
                    this.state.hideChild ? null : <Child />
                }

                <TouchableOpacity onPress={this.toggleChild} style={{ width: "100%" }}>
                    <Text style={{ ...externalStyle.customBtn, backgroundColor: "#130736" }}>Toggle Child Component</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class Child extends Component {
    componentDidMount() {
        ToastAndroid.show("Child component showed successfully..", ToastAndroid.SHORT);
    }

    componentWillUnmount() {
        ToastAndroid.show("Child component hided successfully..", ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={externalStyle.container}>
                <Text style={{ fontSize: 24, color: "orange" }}>Its a Child Component used to hide.</Text>
            </View>
        )
    }
}

export default MyComponentWillUnmount