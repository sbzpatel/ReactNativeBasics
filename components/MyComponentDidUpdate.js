import { Text, ToastAndroid, View } from 'react-native'
import React, { Component } from 'react'
import externalStyle from './externalStyle'

export class MyComponentDidUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: "Deepika Padukone"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ item: "Fazilat Patel" })
        }, 3000)
    }

    componentDidUpdate() {
        ToastAndroid.show("state name changed after 3 second of mounting.", ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={externalStyle.container}>
                <Text style={externalStyle.heading}>RN ComponentDidUpdate</Text>

                <Text style={{ fontSize: 22 }}>My wife name is {this.state.item}</Text>
            </View>
        )
    }
}

export default MyComponentDidUpdate