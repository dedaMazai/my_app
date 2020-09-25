import React, {Component} from 'react';
import img from './foto.jpg';


import './employerAdd.css';
export default class EmployerAdd extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {img};
    }
    previewFile = () => {
        var file = this.myRef.current.files[0],
            reader = new FileReader();

        reader.onloadend = () => {
            this.setState({img: reader.result})
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({img})
        }
    }
    //Скрипт для показа загруженой фотографии
    render() {
        return (
            <>
                <div className="employerAdd">
                    <div className="employerHead">
                        <div className="employerPhoto">
                            <img src={this.state.img} alt="Image preview..."/>
                            <div className="file-upload">
                                <label>
                                    <input
                                        ref={this.myRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={this.previewFile}
                                        className="file"
                                    />
                                    <span>Загрузить</span>
                                </label>
                            </div>
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
                            <p>
                                <button className="one">1 тип</button>
                            </p>
                            <p>
                            -размещение рекламы в главной фотографии пользователей (с ссылкой в коментарии на рекламодателя)
                            </p>
                        </div>
                        <div>
                            <p>
                                <button className="two">2 тип</button>
                            </p>
                            <p>
                            -размещение рекламы в главной фотографии пользователей (с ссылкой в коментарии на рекламодателя) и ссылка на продукт в стутусе
                            </p>
                        </div>
                        <div>
                            <p>
                                <button className="three">3 тип</button>
                            </p>
                            <p>
                            -размещение рекламыв главной фотографии пользователей (с ссылкой в коментарии на рекламодателя), ссылка на продукт в стутусе, а так же пользователи разместят и будут ежедневно обновлять запись на странице с вашим банером + коментарием на странице, для отображения
                            </p>
                        </div>
                    </div>
                    <div className="finalCalc">
                        <div className="one">
                            <p>Итого:</p>
                            <input disabled value="231"/>
                            <p>р.</p>
                        </div>
                        <button>Оплатить</button>
                    </div>
                </div>
            </>
        )
    }

};