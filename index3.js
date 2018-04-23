import { AppRegistry, StyleSheet } from 'react-native';
import App from './App';
import ChatScreen from './js/MyScene';
import Hotshow from './js/Hotshow';
import Usshow from './js/Usshow';
import Soonshow from './js/Soonshow';
import Nearcinemas from './js/Nearcinemas';

import { StackNavigator, TabNavigator } from 'react-navigation';

const SimpleApp = TabNavigator({  
    Hotshow: {
        screen: Hotshow, 
        navigationOptions: {  
            tabBarLabel: '热映',  
            // tabBarIcon: ({ tintColor, focused }) => (  
            //     <Image resizeMode='contain'  
            //         source={require('./icon/icon_hot.png')}  
            //         style={[style.footImage, {tintColor: tintColor}]}  
            //     />  
            // )  
        }
    },  
    Usshow: {
        screen: Usshow, 
        navigationOptions: {  
            tabBarLabel: '北美',  
            // tabBarIcon: ({ tintColor, focused }) => (  
            //         <Image style={[style.footImage, {tintColor: tintColor}]}   
            //             resizeMode='contain'   
            //             source={require('./icon/icon_us_normal.png')}  
            //         />  
            // )  
        }
    },  
    Soonshow: {
        screen: Soonshow, 
        navigationOptions: {  
            tabBarLabel: '近期',  
            // tabBarIcon: ({ tintColor, focused }) => (  
            //     <Image style={[style.footImage, {tintColor: tintColor}]}   
            //         resizeMode='contain'   
            //         source={require('./icon/icon_soon_normal.png')}  
            //     />  
            // )
        }  
    },  
    Nearcinemas: {
        screen: Nearcinemas, 
        navigationOptions: {  
            tabBarLabel: '影院',  
            // tabBarIcon: ({ tintColor, focused }) => (  
            //     <Image style={[style.footImage, {tintColor: tintColor}]}   
            //         resizeMode='contain'   
            //         source={require('./icon/icon_near_normal.png')}  
            //     />  
            // )
        },  
    }  
}, {  
    tabBarPosition: 'bottom',  
    lazy: true, // 是否懒加载  
    initialRouteName: 'Hotshow',  
    tabBarOptions: {  
        showIcon: true,  
        pressOpacity: 0.8,  
        style: {  
            height: 45,  
            backgroundColor: '#ffffff',  
            zIndex: 0,  
            position: 'relative'  
        },  
        labelStyle: {  
            fontSize: 11,  
            paddingVertical: 0,  
            marginTop: -4  
        },  
        iconStyle: {  
            marginTop: -3  
        },  
        tabStyle: {  
            backgroundColor: 'rgb(230,69,51)',  
        },  
    }  
});
let style = StyleSheet.create({  
    footImage: {  
        width: 25,  
        height: 25  
    },  
});
AppRegistry.registerComponent('SampleAppMovies', () => SimpleApp);
