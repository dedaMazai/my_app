import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


import './friends.css';
export default class Friends extends Component {
    constructor() {
        super();
        this.state = {
            value: 'http?fee///',
            copied: false,
        };
    }
    render() {
        return (
            <>
                <div className="headFriend">
                    <div className="ref">
                        <p className="refName">
                            Реферальная ссылка:
                        </p>
                        <input className="refInput" disabled value="http?fee///"/>
                        <CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
                            <button className="refchBut" >Копировать</button>
                        </CopyToClipboard>
                    </div>
                    <div className="friendBlok">
                        <p>
                            С помощью  нашей реферальной программы вы получаете неограниченный заработок онлайн почти на пассиве.
                            После того, как вы зарегистрировались на нашем ресурсе и прошли верификацию, вы получаете собственную реферальную ссылку.
                            Чтобы начать зарабатывать, вам необходимо, чтобы по вашей ссылке зарегистрировался и прошёл верификацию ваш друг, товарищ или просто человек из сети. 
                        </p>
                        <p>
                            За каждого привлеченого пользователя на ваш кошелек будут зачисленно 200р., после того как приглашенный пользователь произведет первый вывод средств.
                            Никаких ограничений по приглашенным пользователям нет.
                        </p>
                    </div>
                </div> 
            </>
        )
    }

};