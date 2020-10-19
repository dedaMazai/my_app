import React, {Component} from 'react';
import AddReclama from './addReclama';
import HeaderAdmin from '../headerAdmin';

import './controlReclama.css';
export default class ControlReclama extends Component {
    render() {
        return (
            <>
                <HeaderAdmin/>
                <div className="contr">
                    <div className="plan">
                        <p>План:</p>
                        <h1>450</h1>
                    </div>
                    <AddReclama/>
                    <div className="exactPlan">
                        <p>Выполнено:</p>
                        <h1>450</h1>
                    </div>
                </div>
            </>
        )
    }

};