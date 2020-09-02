import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import Avatar from '../avatar';
import Tabs from '../tabs';
import Wallet from '../wallet';
import Rule from '../rule';
import Price from '../price';
import Friends from '../friends';

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
            <>
                <Header/>
                {/* <ul className="mainPage">
                    <li className="mainPage ava">
                        <Avatar/>
                    </li>
                    <li className="mainPage tabs">
                        <Tabs/>
                    </li>
                    <li className="mainPage wallet">
                        <Wallet/>
                    </li>
                </ul>
                <Footer/> */}
                <Price/>
            </>
        )
    }

};