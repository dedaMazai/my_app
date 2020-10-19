import React, {Component} from 'react';

import './headerAdmin.css';
export default class HeaderAdmin extends Component {
    render() {
        return (
            <>
                <ul className="menuAdmin">
                    <li className="menuAdmin main"><p>GainAD</p></li>
                    <li className="menuAdmin exit"><p>Advisor Person</p></li>
                </ul>
            </>

        )
    }

};