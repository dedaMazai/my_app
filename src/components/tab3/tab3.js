import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBut} from '../../actions';
import img from './foto.jpg';


import './tab3.css';
class Tab3 extends Component {
    constructor() {
        super();
        this.state = {img};
    }
    render() {
        return (
            <>
                <div className="tab3Add">
                    <div className="tab3Head">
                        <div className="tab3Photo">
                            <img src={this.state.img} alt="Image preview..."/>
                            <div className="file-upload1">
                                <a href={this.state.img} download>Скачать</a>
                            </div>
                        </div>
                        <div className="tab3Center">
                            <div className="url1">
                                <p>Ссылка:</p>
                                <input className="url" placeholder="Ссылка" disabled value="Ссылка"/>
                            </div>
                            <div className="textTer1">
                                <p>Коментарий:</p>
                                <textarea className="textTer" placeholder="Коментарии" disabled value="Коментарии"></textarea>
                            </div>
                            <div className="tab3Calc">
                                <div  className="one">
                                    <p>Дней:</p>
                                    <input disabled value="234"/>
                                </div>
                                <div className="two">
                                    <p>Ставка, р:</p>
                                    <input disabled value="2323"/>
                                </div>
                            </div>
                        </div>
                        <button className="close" onClick={() => this.props.selectBut(0)}>
                            <p className="close">+</p>
                        </button>
                    </div>
                    <div className="tab2Text">
                        <div>
                            <p>
                                <button className="one">3 тип</button>
                            </p>
                            <p>
                            -Вам необходимо разместить изображение с рекламой в вашей главной фотографии профиля
(с ссылкой в коментарии на рекламодателя) и ссылку на рекламный продукт в стутусе, а так же разместить и ежедневно обновлять запись на странице с рекламным изображением и коментраием.
                            </p>
                        </div>
                    </div>
                    <div className="finalCalc">
                        <div className="one">
                            <p>Итого:</p>
                            <input disabled value="2321"/>
                            <p>р.</p>
                        </div>
                        <button>Выполнить</button>
                    </div>
                </div>
            </>
        )
    }
};

const mapDispatchToProps = {
    selectBut
}

export default connect (0, mapDispatchToProps)(Tab3);