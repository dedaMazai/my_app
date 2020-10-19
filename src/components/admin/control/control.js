import React, {Component} from 'react';
import AddControl from './addControl';
import HeaderAdmin from '../headerAdmin';

import './control.css';
export default class Control extends Component {
    render() {
        return (
            <>
                <HeaderAdmin/>
                <div className="contr">
                    <div className="plan">
                        <p>План:</p>
                        <h1>450</h1>
                    </div>
                    <AddControl/>
                    <div className="exactPlan">
                        <p>Выполнено:</p>
                        <h1>450</h1>
                    </div>
                </div>
            </>
        )
    }

};