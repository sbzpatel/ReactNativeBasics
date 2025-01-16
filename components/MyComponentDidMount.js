import React, { Component } from "react"
import { View, Text } from "react-native"
import externalStyle from "./externalStyle"

class MyComponentDidMount extends Component {
    constructor(props) {
        console.log("constructor calling...(MyComponentDidMount)")
        super(props);

        this.state = {
            name: "Shahbaz Shaikh"
        }
    }

    componentDidMount() {
        console.log("componentDidMount calling...(MyComponentDidMount)");
        
        setTimeout(() => {
            this.setState({ name: "Shahbaz Patel" })
        }, 1000)
    }

    render() {
        console.log("render calling...(MyComponentDidMount)");
        return (
            <View style={externalStyle.container}>
                <Text style={externalStyle.heading}>RN ComponentDidMount</Text>

                <Text style={{ textAlign: "cneter", fontSize: 24 }}>Hi {this.state.name}, How are your...</Text>
            </View>
        )
    }
}

export default MyComponentDidMount;