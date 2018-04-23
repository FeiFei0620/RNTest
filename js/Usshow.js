import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class MyScene extends Component{
    static defaultProps = {
        title: 'Ussshow'
    };

    render() {
        return (
            <View>
                <Text>{"Ussshow"}</Text>
            </View>
        )
    }
}