import React, {Component} from 'react';

import './header.css';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    authDown = (press) => {
        this.setState({num: press})
    }
    render() {
        return (
            <div className="header">
                <ul className="menu">
                    <li className="menu main"><p>Главная</p></li>
                    <li className="s">|</li>
                    <li className="menu order"><p>Заказать</p></li>
                    <li className="s">|</li>
                    <li className="menu support"><p>Тех. поддержка</p></li>
                    <li className="s">|</li>
                    <li className="menu friend"><p>Партнерка</p></li>
                    <li className="s">|</li>
                    <li className="menu cost"><p>Расценки</p></li>
                    <li className="s">|</li>
                    <li className="menu rule"><p>Правила</p></li>
                    <li className="menu exit"><p>Выход</p></li>
                </ul>
            </div>
        )
    }

};