import React, {Component} from 'react';

import './wallet.css';
export default class Wallet extends Component {
    render() {
        return (
            <div class="square">
                <p class="trian top">Money</p>
                <div class="triangular">
                    <div class="circle"></div>
                </div>
                <p class="trian wallet">223.16 р.</p>
                <p class="trian out">Вывод</p>
            </div>
        )
    }

};