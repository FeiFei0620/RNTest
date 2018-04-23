import React,{Component} from 'react';
import {
    Button,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
   DrawerNavigator
} from 'react-navigation';

import MyNotificationsScreen from './MyNotificationsScreen';

class MinePage extends Component{
    static navigationOptions = {
          title:'我的',
         drawerLabel: '我的',
        // Note: By default the icon is only shown on iOS. Search the  showIcon option below.
        //  drawerIcon: ({ tintColor }) => (
        //  <Image
        //      source={require('./image/chat@3x.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        //  />
    //   ),
   };
    render(){;
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <Text style={{padding:20}}>Sybil</Text>
                <Button
                  style={{padding:20}}
                  onPress={() => this.props.navigation.navigate('DrawerOpen')}
                  title="点击打开侧滑菜单"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default MinePage;