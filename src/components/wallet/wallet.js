import React, {Component} from 'react';

import './wallet.css';
export default class Wallet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wallet">
                <div className="three">
                <p>Money</p>
                </div>
                <p>233.16р</p>
                <p>Вывод</p>
            </div>
        )
    }

};