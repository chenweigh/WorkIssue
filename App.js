/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation';


class screen1 extends Component {
    static navigationOptions  = ({ navigation, screenProps }) => ({
        title: 'screen1',
    })
  render() {
    return (
      <View style={{flex:1, backgroundColor:'red'}}></View>
    );
  }
}

class screen2 extends Component {
    static navigationOptions  = ({ navigation, screenProps }) => ({
        title: 'screen1',
    })
  render() {
    return (
      <View style={{flex:1, backgroundColor:'blue'}}></View>
    );
  }
}

const TabBar = TabNavigator({
    screen1: {
        screen: screen1, 
    },
    screen2: {
        screen: screen2, 
    },
},{
    // lazy:true,    //app 启动前不加载全部页面
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
})
const app = StackNavigator({
    TabBar:TabBar,
    screen1:screen1,
    screen2:screen2,
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default App;
export default app;
