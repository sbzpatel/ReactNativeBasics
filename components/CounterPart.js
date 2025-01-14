import { Text, View } from 'react-native'
import React, { Component, PureComponent } from 'react'

export class CounterPart extends PureComponent {
    render() {
        console.warn("CounterPart rendering...");
        
        return (
            <>
                <Text style={{ fontSize: 24, fontWeight: 900 }}> CounterPart {this.props.count} </Text>
            </>
        )
    }
}

export default CounterPart