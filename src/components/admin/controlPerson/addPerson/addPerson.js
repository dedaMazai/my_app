import React, {Component} from 'react';

import './addPerson.css';
export default class AddPerson extends Component {
    render() {
        return (
            <div className="addPer">
                <div className="addPersonLeft">
                    <div className="addPersonTop">
                        <div className="addPersonAva">
                            <img  className="addPerson" src="http://pbs.twimg.com/media/DebhsneX4AAYZNh.jpg" alt="Image preview..."/>
                            <button>ВК</button>
                        </div>
                        <div className="addPersonComment">
                            <input placeholder="Ссылка:"/>
                            <textarea placeholder="Коментарий:"/>
                        </div>
                    </div>
                    <div className="addPersonButton">
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