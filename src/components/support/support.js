import React, {Component} from 'react';
import img from './foto.jpg';

import './support.css';
export default class Support extends Component {
    render() {
        return (
            <div className="sup">
                <h1>
                    Поддержка:
                </h1>
                <div className="supMessage">
                    <img src={img} alt="Image preview..."/>
                    <p>
                        Здравствуйте, вы берете заказ на размещением фотографии (+ коментария под ней на рекламодателя), ссылки в статусе и размещением поста на странице с ежеднемным его обновлением все эти условия необходимы быть выполнены в течении 10 минут с того момента как вы взяли задание.
                        Обновление поста обязательно должно существляться
                    </p>
                </div>
                <div className="supBottom">
                    <input className="supString"/>
                    <div id="supFile">
                        <label>
                            <input type="file" className="supFile" id="uploade-file"/>
                            <span>&#926;</span>
                        </label>
                    </div>
                    <button>Отправить</button>
                </div>
            </div>
        )
    }

};