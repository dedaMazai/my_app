import React, {Component} from 'react';

import './addReclama.css';
export default class AddReclama extends Component {
    render() {
        return (
            <div className="addRecl">
                <div className="addReclamaLeft">
                    <div className="addReclamaTop">
                        <div className="addReclamaAva">
                            <img  className="addReclama" src="http://pbs.twimg.com/media/DebhsneX4AAYZNh.jpg" alt="Image preview..."/>
                            <button>Сайт</button>
                        </div>
                        <div className="addReclamaComment">
                            <textarea placeholder="Коментарий:"/>
                            <textarea placeholder="Коментарий:"/>
                        </div>
                    </div>
                    <div className="addReclamaButton">
                        <p>Если пользователь выполнил все условия:</p>
                        <button>Подтвердить</button>
                    </div>
                </div>
                <button className="disableControl">
                    <p>Нарушение</p>
                </button>
            </div>
        )
    }

};