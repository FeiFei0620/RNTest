import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import ChatScreen from './js/MyScene';
import Hotshow from './js/Hotshow';
import Usshow from './js/Usshow';
import Soonshow from './js/Soonshow';
import Nearcinemas from './js/Nearcinemas';

import HomePage from './js/StackAndTab/HomePage';
import MinePage from './js/StackAndTab/MinePageTwo';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// const SimpleApp = StackNavigator ({
//     Home: {
//         screen: App,
//         navigationOptions: {
//             headerTitle: 'First',
//             headerBackTitle: null,
//         }
//     },
//     Chat: {
//         screen: ChatScreen,
//         navigationOptions: {
//             headerTitle: 'Second',
//             headerBackTitle: null,
//         }
//     }
// });



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

const stackApp = StackNavigator ({
    MainScreenNavigator: {
        screen: MainScreenNavigator,
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            headerTitle: 'chat',
        }
    }
});

const SimpleApp = DrawerNavigator({
    Home: {
        screen: stackApp
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            headerTitle: 'Second',
            headerBackTitle: null,
        }
    }
},{
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: HomePage, // 默认页面组件
        activeTintColor: '#008AC9',  // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});
AppRegistry.registerComponent('SampleAppMovies', () => SimpleApp);
