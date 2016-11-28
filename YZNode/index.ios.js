/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';


import HomePage from './HomePage/HomePage';

class YZNode extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: HomePage,
                    title: '主页',
                }}
                style={{flex: 1}}
            />
        )
    }
}



AppRegistry.registerComponent('YZNode', () => YZNode);
