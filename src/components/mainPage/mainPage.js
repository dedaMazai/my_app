import React, {Component} from 'react';
import Header from '../header';
import FooterJob from '../footerJob';
import Footer from '../footer';
import Rule from '../rule';
import Price from '../price';
import Profile from '../profile';
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
                <Profile/>
                {/* <FooterJob/> */}
                <Footer/>
            </>
        )
    }

};