import React, {Component} from 'react';

import './auth.css';
export default class Auth extends Component {
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
            if (this.state.num === 0) {
                return (
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active" onClick={() =>this.authDown(0)}> Войти </h2>
                        <h2 className="inactive underlineHover" onClick={() =>this.authDown(1)}> Зарегистрироваться </h2>
                        <div className="fadeIn second">
                            <div>
                                <form>
                                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email"/>
                                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Пароль"/>
                                    <input type="submit" className="fadeIn fourth" value="Войти"/>
                                </form>
                            </div>
                            <div id="formFooter">
                                <p className="underlineHover" onClick={() =>this.authDown(2)}>Забыли пароль?</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }else if(this.state.num === 1){
                return (
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="inactive underlineHover" onClick={() =>this.authDown(0)}> Войти </h2>
                        <h2 className="active" onClick={() =>this.authDown(1)}> Зарегистрироваться </h2>
                        <div className="fadeIn second">
                            <form>
                                <input type="text" id="name" className="fadeIn second" name="login" placeholder="Ф.И.О."/>
                                <input type="email" id="email" className="fadeIn second" name="login" placeholder="Email"/>
                                <input type="password" id="password" className="fadeIn second" name="password" placeholder="Пароль"/>
                                <input type="password" id="password" className="fadeIn second" name="password" placeholder="Повторите пароль"/>
                                <input type="tel" id="email" className="fadeIn second" name="login" placeholder="Телефон: +7..."/>
                                <input type="submit" className="fadeIn fourth" value="Зарегистрироваться"/>
                            </form>
                        </div>
                    </div>
                    </div>
                )
            }else{
                return (
                    <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Восстановление пароля </h2>
                        <div className="fadeIn second">
                        <input type="tel" id="email" className="fadeIn second" name="login" placeholder="Телефон: +7..."/>
                            <input type="button" className="fadeIn fourth" onClick={() =>this.authDown(0)} value="Отправить пароль на email"/>
                        </div>
                    </div>
                    </div>
                )
            }
    }

};