import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from '../../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';

import './auth.css';
function Auth ()  {
    const auth = useContext(AuthContext);
    const {loading, request, error} = useHttp();
    const [form, setForm] = useState({
        num: 0, email: '', password: '', login: '', massage: ''
    });

    useEffect(() => {
        setForm({ ...form, massage: error })
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const authDown = (press) => {
        setForm({ num: press })
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/signup', 'POST', {...form});
            setForm({ ...form, massage: data.message })
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const loginHandler = async () => {
        try {
          const data = await request('/api/login', 'POST', {...form});
          auth.login(data.token, data.id)
          setForm({ ...form, massage: data.message })
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    if (form.num === 0) {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active" onClick={() =>authDown(0)}> Войти </h2>
                    <h2 className="inactive underlineHover" onClick={() =>authDown(1)}> Зарегистрироваться </h2>
                    <div className="fadeIn second">
                        <div>
                            <form>
                                <input  type="text"
                                        id="login"
                                        className="fadeIn second"
                                        name="email"
                                        placeholder="Email"
                                        onChange={changeHandler}/>
                                <input  type="password"
                                        id="password"
                                        className="fadeIn third"
                                        name="password"
                                        placeholder="Пароль"
                                        onChange={changeHandler}/>
                                <input  className="fadeIn fourth"
                                        id="submit"
                                        type="button"
                                        value="Войти"
                                        disabled={loading}
                                        onClick={loginHandler}/>
                            </form>
                        </div>
                        <div id="formFooter">
                            <p className="underlineHover" onClick={() =>authDown(2)}>Забыли пароль?</p>
                        </div>
                    </div>
                </div>
                <div className={form.massage === '' || form.massage === null || form.massage === undefined ? "hidden" : "massage"}>
                    <h2> {form.massage} </h2>
                </div>
            </div>
        )
    }else if(form.num === 1){
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="inactive underlineHover" onClick={() =>authDown(0)}> Войти </h2>
                    <h2 className="active" onClick={() =>authDown(1)}> Зарегистрироваться </h2>
                    <div className="fadeIn second">
                        <form>
                            <input  type="text"
                                    id="name"
                                    className="fadeIn second"
                                    name="namePerson"
                                    placeholder="Ф.И.О."/>
                            <input  type="email"
                                    id="email"
                                    className="fadeIn second"
                                    name="email"
                                    placeholder="Email"
                                    onChange={changeHandler}/>
                            <input  type="password"
                                    id="password"
                                    className="fadeIn second"
                                    name="password"
                                    placeholder="Пароль"
                                    onChange={changeHandler}/>
                            <input  type="password"
                                    id="password"
                                    className="fadeIn second"
                                    name="passwordRepeat" placeholder="Повторите пароль" onChange={changeHandler}/>
                            <input  type="tel"
                                    id="email"
                                    className="fadeIn second"
                                    name="login"
                                    onChange={changeHandler}
                                    placeholder="Телефон: +7..."/>
                            <input  className="fadeIn fourth"
                                    id="submit"
                                    type="button"
                                    value="Зарегистрироваться"
                                    disabled={loading}
                                    onClick={registerHandler}/>
                        </form>
                    </div>
                </div>
                <div className={form.massage === '' || form.massage === null || form.massage === undefined ? "hidden" : "massage"}>
                    <h2> {form.massage} </h2>
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
                <div className={form.massage === '' || form.massage === null || form.massage === undefined ? "hidden" : "massage"}>
                    <h2> {form.massage} </h2>
                </div>
            </div>
        )
    }

};

export default Auth;