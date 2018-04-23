import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class MyScene extends Component{
    static defaultProps = {
        title: 'Nearcinemas'
    };

    render() {
        return (
            <View>
                <Text>{"Nearcinemas"}</Text>
            </View>
        )
    }
}