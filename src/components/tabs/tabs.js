import React from 'react';
import { connect } from 'react-redux';
import {selectBut} from '../../actions';


import './tabs.css';
function Tabs ({selectBut}) {
    return (
        <ul className="tabs">
            <li className="tab tab1" onClick={() => selectBut(11)}>
                <p>1.Аватарка</p>
                <h1>60%</h1>
                <h3>от заказа</h3>
            </li>
            <li className="tab tab2" onClick={() => selectBut(13)}>
                <p>1.Аватарка</p>
                <p>2.Ссылка в статусе</p>
                <p>3.Банер на стене с ежедневным обновлением</p>
                <h1>100%</h1>
                <h3>от заказа</h3>
            </li>
            <li className="tab tab3" onClick={() => selectBut(12)}>
                <p>1.Аватарка</p>
                <p>2.Ссылка в статусе</p>
                <h1>65%</h1>
                <h3>от заказа</h3>
            </li>
        </ul>
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

export default connect (mapStateToProps, mapDispatchToProps)(Tabs);