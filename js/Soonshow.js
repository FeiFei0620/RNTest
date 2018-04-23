import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class MyScene extends Component{
    static defaultProps = {
        title: 'SoonShow'
    };

    render() {
        return (
            <View>
                <Text>{"SoonShow"}</Text>
            </View>
        )
    }
}