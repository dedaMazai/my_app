import React, {Component} from 'react';
import Avatar from '../avatar';
import Tabs from '../tabs';
import Wallet from '../wallet';

import './profile.css';
export default class Profile extends Component {
    render() {
        return (
            <ul className="mainPage">
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
        )
    }

};