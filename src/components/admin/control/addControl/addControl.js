import React, {Component} from 'react';

import './addControl.css';
export default class AddControl extends Component {
    render() {
        return (
            <div className="addContr">
                <img  className="addControl" src="https://pbs.twimg.com/media/DebhsneX4AAYZNh.jpg" alt="Image preview..."/>
                <div className="centerControl">
                    <textarea placeholder="Коментарий:"/>
                    <div>
                        <button className="vkControl">ВК</button>
                        <button className="agreeControl">Подтвердить</button>
                    </div>
                </div>
                <button className="disableControl">
                    <p>Нарушение</p>
                </button>
            </div>
        )
    }

};