import React, {Component} from 'react';

import {
    WebView
} from 'react-native';

import Api from '../Api';

class DetailView extends Component {

    constructor() {
        super();
        this.state = {htmlContent: "<html><body></body></html>"};
    }

    render() {
        const {
            id
        } = this.props;

        console.log(id + "hello");

        return (
            <WebView
                style={{flex: 1}}
                source={{html: this.state.htmlContent}}
            />
        )
    }

    componentDidMount() {

        const {
            id
        } = this.props;
        const url = Api.detail + id;

        fetch(url)
            .then((data) => data.json())
            .then((jsonData) => {
                const dic = jsonData.data;
                const html = "<html><body>" + "<h3>" + dic.title + "</h3>" + "<p style='font-size: 18'>" + dic.tab + "|" + dic.loginName + "|" + dic.create_at + "</p>" + dic.content + "</body></html>";
                this.setState({
                    htmlContent: html
                });
            }).done();


    }

}

export default DetailView;