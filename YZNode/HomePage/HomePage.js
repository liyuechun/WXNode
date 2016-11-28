

import React, {Component} from 'react';

import {
    View,
    ListView
} from 'react-native';


import Cell from './Cell';
import Api from '../Api';
import DetailView from '../DetailView/DetailView';

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'green'}}>
                <ListView
                    style={{flex: 1,backgroundColor: 'rgb(214,214,214)'}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        )
    }

    renderRow(rowData) {
        return (
            <Cell
                rowData={rowData}
                pushToNextView={(id) => {
                    console.log(id);
                    this.props.navigator.push({
                        title: '详情页',
                        component: DetailView,
                        passProps: {id}
                    });
                }}
            />
        )
    }

    componentDidMount() {
    //    下载数据
        fetch(Api.homePage)
            .then((data) => data.json())
            .then((jsonData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(jsonData.data)
                });
            }).done();
    }

}

export default HomePage;

































