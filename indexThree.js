import { AppRegistry, StyleSheet } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import HomePage from './js/StackAndTab/HomePage';
import MinePage from './js/StackAndTab/MinePage';
import ChatScreen from './js/StackAndTab/ChatScreen';
const MainScreenNavigator = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页',
        }
    },
    Certificate: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

const SimpleApp = StackNavigator ({
    Home: {
        screen: MainScreenNavigator,
    },
    Chat: {
        screen: ChatScreen
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
AppRegistry.registerComponent('SampleAppMovies', () => SimpleApp);
