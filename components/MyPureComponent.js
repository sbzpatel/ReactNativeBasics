// PureComponent is a base class of React Native that is used to optimize the rendering performance of a component which prevents from unnecessary re-renders when no any state or props changed.


import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component, PureComponent } from 'react'
import externalStyle from './externalStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import CounterPart from './CounterPart';

export class MyPureComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleIncCount = () => {
        this.setState({ count: this.state.count })
    }

    render() {
        console.warn("Component rerendering...");

        return (
            <View style={externalStyle.container}>
                <Text style={externalStyle.heading}>RN PureComponent</Text>

                <Text style={{ fontSize: 24, color: "#0a184d" }}>Count {this.state.count}</Text>

                <CounterPart count={this.state.count} />

                <TouchableOpacity style={styles.button} onPress={this.handleIncCount}>
                    <Text style={styles.buttonText}>Increment Count</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: scale(20)
    },
    input: {
        width: "100%",
        height: verticalScale(50),
        backgroundColor: "#fff",
        borderRadius: scale(10),
        paddingHorizontal: scale(15),
        fontSize: scale(18),
        borderStyle: "solid",
        borderWidth: scale(2),
        borderColor: "#000",
        marginBottom: scale(20)
    },
    button: {
        width: "95%",
        height: verticalScale(50),
        backgroundColor: "#002dff",
        borderRadius: scale(7),
        justifyContent: "center",
        alignItems: "center",
        margin: scale(15)
    },
    buttonText: {
        color: "#fff",
        fontSize: scale(18),
        fontWeight: "bold"
    }
})

export default MyPureComponent