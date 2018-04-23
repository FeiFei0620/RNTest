import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { Button as Btn, Icon, DatePicker, List } from 'antd-mobile';

export default class HomePage extends Component{
    static navigationOptions = {
        title: '首页',//设置标题内容
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={{padding:10}}>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Sybil'})}
                    title="点击跳转"/>
                    <Btn>Start</Btn>
                    <Icon key="1" type="check" />
                    <DatePicker minuteStep = {30}  >
                               <List.Item arrow="horizontal">开始时间</List.Item>
                    </DatePicker> 
            </View>
        )
    }
}