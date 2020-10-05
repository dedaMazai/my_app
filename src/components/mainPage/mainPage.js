import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import FooterJob from '../footerJob';
import Footer from '../footer';
import Rule from '../rule';
import Price from '../price';
import Profile from '../profile';
import Friends from '../friends';
import Employer from '../employer';
import EmployerAdd from '../employerAdd';
import Tab1 from '../tab1';
import Tab2 from '../tab2';
import Tab3 from '../tab3';
import Verification from '../verification';
import Support from '../support';

import './mainPage.css';
function MainPage ({buttons}) {
    return (
        <>
            <Header/>
            <div className={buttons===0?"divTrue":"divHidden"}>
                <Profile/>
                <FooterJob/>
            </div>
            <div className={buttons===1?"divTrue":"divHidden"}>
                <Employer/>
            </div>
            <div className={buttons===2?"divTrue":"divHidden"}>
                <Support/>
            </div>
            <div className={buttons===3?"divTrue":"divHidden"}>
                <Friends/>
            </div>
            <div className={buttons===4?"divTrue":"divHidden"}>
                <Price/>
            </div>
            <div className={buttons===5?"divTrue":"divHidden"}>
                <Rule/>
            </div>
            <div className={buttons===11?"divTrue":"divHidden"}>
                <Tab1/>
            </div>
            <div className={buttons===12?"divTrue":"divHidden"}>
                <Tab2/>
            </div>
            <div className={buttons===13?"divTrue":"divHidden"}>
                <Tab3/>
            </div>
            <Footer/>
        </>
    )
};

const mapStateToProps =  (state) =>{
    return {
        buttons: state.buttons
    }
}

export default connect (mapStateToProps)(MainPage);