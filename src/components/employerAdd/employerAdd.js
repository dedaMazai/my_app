import React, {Component} from 'react';


import './employerAdd.css';
export default class EmployerAdd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="employerAdd">
                    <div className="employerHead">
                        <div className="employerPhoto">
                            <img className="img"
                             src="https://cs.pikabu.ru/post_img/big/2013/09/23/1/1379885977_165860917.jpg"
                              title="Обложка" alt="Image preview..."/>
                              <button>Загрузить</button>
                        </div>
                        <div className="employerCenter">
                            <input className="url" placeholder="Ссылка"/>
                            <textarea className="textTer" placeholder="Коментарии"></textarea>
                            <div className="employerCalc">
                                <div  className="one">
                                    <p>Дней:</p>
                                    <input/>
                                </div>
                                <div className="two">
                                    <p>Человек:</p>
                                    <input/>
                                </div>
                            </div>
                        </div>
                        <button className="close">
                            <p className="close">+</p>
                        </button>
                    </div>
                    <div className="employerText">
                        <div>
                            <p className="one">1 тип</p>
                            <p>
                            -размещение рекламы в главной фотографии пользователей (с ссылкой в коментарии на рекламодателя)
                            </p>
                        </div>
                        <div>
                            <p className="two">2 тип</p>
                            <p>
                            -размещение рекламы в главной фотографии пользователей (с ссылкой в коментарии на рекламодателя) и ссылка на продукт в стутусе
                            </p>
                        </div>
                        <div>
                            <p className="three">4 тип</p>
                            <p>
                            -размещение рекламыв главной фотографии пользователей (с ссылкой в коментарии на рекламодателя), ссылка на продукт в стутусе, а так же пользователи разместят и будут ежедневно обновлять запись на странице с вашим банером + коментарием на странице, для отображения
                            </p>
                        </div>
                    </div>
                    <div className="finalCalc">
                        <div className="one">
                            <p>Итого:</p>
                            <input/>
                            <p>р.</p>
                        </div>
                        <button>Оплатить</button>
                    </div>
                </div>
            </>
        )
    }

};