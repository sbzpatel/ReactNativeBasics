import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import externalStyle from './externalStyle';

// export class MyUseState extends Component {
const MyUseState = () => {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: 0
    //     }
    // }

    // handlePress = () => {
    //     this.setState({ count: this.state.count+1 });
    // }

    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    }

    // render() {
    return (
        <View style={externalStyle.container}>
            <Text style={{ ...externalStyle.heading, fontSize: 22 }}>RN State in class/functional component</Text>

            {/* <Text style={externalStyle.heading}>Counter: {this.state.count}</Text> */}
            <Text style={[externalStyle.heading, { fontWeight: 200 }]}>Counter: {count}</Text>

            <TouchableOpacity
                // onPress={this.handlePress}
                onPress={handlePress}
                style={{ width: "98%" }}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#130736" }}>Increment Counter</Text>
            </TouchableOpacity>
        </View>
    )
    // }
}

export default MyUseState