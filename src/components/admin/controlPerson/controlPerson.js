import React, {Component} from 'react';
import AddPerson from './addPerson';
import HeaderAdmin from '../headerAdmin';

import './controlPerson.css';
export default class ControlPerson extends Component {
    render() {
        return (
            <>
                <HeaderAdmin/>
                <div className="contr">
                    <div className="plan">
                        <p>План:</p>
                        <h1>450</h1>
                    </div>
                    <AddPerson/>
                    <div className="exactPlan">
                        <p>Выполнено:</p>
                        <h1>450</h1>
                    </div>
                </div>
            </>
        )
    }

};