import React, {Component} from 'react';
import Header from '../header';
import FooterJob from '../footerJob';
import Footer from '../footer';
import Avatar from '../avatar';
import Tabs from '../tabs';
import Wallet from '../wallet';
import Rule from '../rule';
import Price from '../price';
import Friends from '../friends';
import Employer from '../employer';
import EmployerAdd from '../employerAdd';

import './mainPage.css';
export default class MainPage extends Component {
    constructor() {
        super();
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
                </ul> */}
                <EmployerAdd/>
                <Footer/>
            </>
        )
    }

};