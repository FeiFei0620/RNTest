import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class MyScene extends Component{
    static defaultProps = {
        title: 'Hotshow'
    };

    render() {
        return (
            <View>
                <Text>{"Hotshow"}</Text>
            </View>
        )
    }
}