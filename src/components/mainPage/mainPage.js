import React, {Component} from 'react';
import Header from '../header';

import './mainPage.css';
export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    authDown = (press) => {
        this.setState({num: press})
    }
    render() {
        return (
            <Header/>
        )
    }

};