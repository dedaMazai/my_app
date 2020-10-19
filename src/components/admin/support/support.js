import React, {Component} from 'react';
import SupportPerson from './supportPerson';
import HeaderAdmin from '../headerAdmin';
import { Link } from 'react-router-dom';

import './support.css';
export default class Support extends Component {
    render() {
        return (
            <>
                <HeaderAdmin/>
                <div className="contr">
                    <div className="plan">
                        <p>План:</p>
                        <h1>450</h1>
                    </div>
                    <Link to = "/supportPerson">
                        <div className="supTask">
                            <div className="supTask1">
                                <img src="http://pbs.twimg.com/media/DebhsneX4AAYZNh.jpg" alt="Image preview..."/>
                            </div>
                            <div className="supTask2">
                                <p className="supTaskName">Иванов Иван Иванович</p>
                                <p className="supTaskSMS">Здравствуйте, иван иванович оаоао аоаоао аоао ...... ... ..   fewfwef efwef</p>
                            </div>
                        </div>
                    </Link>
                    <div className="exactPlan">
                        <p>Выполнено:</p>
                        <h1>450</h1>
                    </div>
                </div>
            </>
        )
    }

};