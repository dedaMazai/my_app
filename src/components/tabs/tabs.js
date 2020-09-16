import React, {Component} from 'react';

import './tabs.css';
export default class Tabs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="tabs">
                <li className="tab tab1">
                    <p>1.Аватарка</p>
                    <br/>
                    <h1>60%</h1>
                    <p>от заказа</p>
                </li>
                <li className="tab tab2">
                    <p>1.Аватарка</p>
                    <p>2.Ссылка в статусе</p>
                    <p>3.Банер на стене с ежедневным обновлением</p>
                    <br/>
                    <h1>100%</h1>
                    <p>от заказа</p>
                </li>
                <li className="tab tab3">
                    <p>1.Аватарка</p>
                    <p>2.Ссылка в статусе</p>
                    <br/>
                    <h1>65%</h1>
                    <p>от заказа</p>
                </li>
            </ul>
        )
    }

};