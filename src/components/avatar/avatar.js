import React, {Component} from 'react';

import './avatar.css';
export default class Avatar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="avatar">
                <img  className="avatar" src="https://ktonanovenkogo.ru/image/finik.jpg" title="1" alt="Image preview..."/>
                <div className="avafooter">
                    <p className="avatar level">Золотой уровень:</p>
                    <p className="avatar status">Постоялец:</p>
                    <p className="avatar history">История заказов</p>
                    <p className="avatar warn">Предупреждение!</p>
                </div>
            </div>
        )
    }

};