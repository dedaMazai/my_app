import React from 'react';
import { connect } from 'react-redux';
import {selectBut} from '../../actions';

import './header.css';
function Header ({selectBut}) {
    return (
        <div className="header">
            <ul className="menu">
                <li className="menu main" onClick={() => selectBut(0)}><p>Главная</p></li>
                <li className="s">|</li>
                <li className="menu order" onClick={() => selectBut(1)}><p>Заказать</p></li>
                <li className="s">|</li>
                <li className="menu support" onClick={() => selectBut(2)}><p>Тех. поддержка</p></li>
                <li className="s">|</li>
                <li className="menu friend" onClick={() => selectBut(3)}><p>Партнерка</p></li>
                <li className="s">|</li>
                <li className="menu cost" onClick={() => selectBut(4)}><p>Расценки</p></li>
                <li className="s">|</li>
                <li className="menu rule" onClick={() => selectBut(5)}><p>Правила</p></li>
                <li className="menu exit"><p>Выход</p></li>
            </ul>
        </div>
    )
};

const mapStateToProps =  (state) =>{
    return {
        buttons: state.buttons
    }
}


const mapDispatchToProps = {
    selectBut
}

export default connect (mapStateToProps, mapDispatchToProps)(Header);