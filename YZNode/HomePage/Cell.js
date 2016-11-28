/**
 * Created by yuechunli on 2016/11/25.
 */

import React, {Component} from 'react';


let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;


import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


class Cell extends Component {

    render() {

        const {
            rowData,
            pushToNextView
        } = this.props;
        return (
            <TouchableHighlight onPress={() => {
                console.log("cell被点击");
                pushToNextView && pushToNextView(rowData.id);
            }}>
                <View style={styles.cell}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <View style={styles.info}>
                        <Text style={{marginLeft: 15, marginRight: 15, color: 'rgb(159,209,86)'}}>{rowData.tab}</Text>
                        <Text
                            style={{color: "rgb(149,149,149)"}}>{rowData.author.loginname}|{rowData.reply_count}回复|{rowData.visit_count}访问</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )

    }
}

const styles = StyleSheet.create({
    cell: {
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    info: {
        marginTop: 10,
        marginBottom: 10,
        width: SCREEN_WIDTH,
        flexDirection: 'row'
    }
});


export default Cell;