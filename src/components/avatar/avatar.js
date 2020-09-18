import React, {Component} from 'react';

import './avatar.css';
export default class Avatar extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="avatar">
                <img  className="avatar" src="http://zornet.ru/_ld/93/48255040.jpg" title="1" alt="Image preview..."/>
                <ul className="avafooter">
                    <li className="level">Золотой уровень: <strong>+60р</strong></li>
                    <li className="status">Постоялец: <strong>+5р</strong></li>
                    <li className="history">История заказов</li>
                    <li className="warn">Предупреждение!</li>
                </ul>
            </div>
        )
    }

};