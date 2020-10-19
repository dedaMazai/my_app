import React, {Component} from 'react';
import img from './foto.jpg';


import './verification.css';
export default class Verification extends Component {
    constructor() {
        super();
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
                <div className="verification">
                     <div className="verificationText">
                        <h1>
                            Вы ещё не прошли верификацию!
                        </h1>
                        <p>
                        Что нужно для успешного прохождения верификации:<br/>
                        &nbsp;&nbsp;1) VK профиль должен быть открыт<br/>
                        &nbsp;&nbsp;2) VK профиль должен быть “живой” (наличие как минимум 1 фотографии (так же должна быть фотография с вами для возможности подтвердить личность) и записи на стене добавленных до 11.09.2020, наличие видео и музыки, подписок на группы)<br/>
                        &nbsp;&nbsp;3) наличие как минимум 100 друзей<br/>
                        &nbsp;&nbsp;4) подтверждение уникальной сделанной вами фотографией на которой видно ваше лицо и рядом экран на котором видно ваш профиль Вк
                        </p>
                    </div>
                    <div className="verificationHead">
                            <div className="verificationPhoto">
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
                            <div className="verificationCenter">
                                <p>Ссылка на профиль ВК:</p>
                                <input className="url" placeholder="Ссылка"/>
                                <p>Фотография должна быть сделана в светлом помещении, что бы было четко видно ваше лицо и экран компьютера с вашим профилем ВК.</p>
                                <div className="verificationButton">
                                        <button>Отправить</button>
                                </div>
                            </div>
                    </div>
                    {/* <div className="verificationHead2">
                        <p>Ваша заявка находится на расмотрении.<br/> Обычно это занимает от 1 до 7 дней.</p>
                    </div> */}
                </div>
        )
    }

};