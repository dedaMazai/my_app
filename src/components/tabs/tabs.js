import React, {Component} from 'react';

import './tabs.css';
export default class Tabs extends Component {
    render() {
        return (
            <ul className="tabs">
                <li className="tab tab1">
                    <p>1.Аватарка</p>
                    <h1>60%</h1>
                    <h3>от заказа</h3>
                </li>
                <li className="tab tab2">
                    <p>1.Аватарка</p>
                    <p>2.Ссылка в статусе</p>
                    <p>3.Банер на стене с ежедневным обновлением</p>
                    <h1>100%</h1>
                    <h3>от заказа</h3>
                </li>
                <li className="tab tab3">
                    <p>1.Аватарка</p>
                    <p>2.Ссылка в статусе</p>
                    <h1>65%</h1>
                    <h3>от заказа</h3>
                </li>
            </ul>
        )
    }

};