import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import externalStyle from './externalStyle'

export class MyShouldComponentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate ", this.state.count);

        if (this.state.count < 5 || this.state.count > 10) {
            return true;
        } else {
            return false;
        }

        // return true;
    }

    handleCountInc = () => {
        console.log("handleCountInc calling...");

        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <View style={externalStyle.container}>
                <Text style={[externalStyle.heading, { fontSize: 26 }]}>RN shouldComponentUpdate</Text>

                <Text style={{ fontSize: 28, color: "#e68a00" }}>Counter: {this.state.count}</Text>

                <View style={{ width: "95%" }}>
                    <TouchableOpacity
                        onPress={this.handleCountInc}
                    >
                        <Text style={{ ...externalStyle.customBtn, backgroundColor: "#e68a00", color: "#ffffff" }}>Increment Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default MyShouldComponentUpdate