import React, {Component} from 'react';

import './employer.css';
export default class Employer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: [1,2,3,4,5]
        };
    }
    render() {
        return (
            <div>
                <div className="blokEmploy">
                    <p className="blokEmploy">Активные:</p>
                    <ul className="topJob">
                        <li className="topJob">
                                <a href="/">
                                    <img  className="topJob" src="https://netoly.ru/wp-content/uploads/2020/02/perevodchik-s-anglijskogo-na-russkij.jpg" title="12" alt="Image preview..."/>
                                </a>
                        </li>
                        <li className="topJob">
                                <a href="/">
                                    <img  className="topJob" src="https://netoly.ru/wp-content/uploads/2020/02/perevodchik-s-anglijskogo-na-russkij.jpg" title="12" alt="Image preview..."/>
                                </a>
                        </li>
                        <li className="topJob">
                                <a href="/">
                                    <img  className="topJob" src="https://netoly.ru/wp-content/uploads/2020/02/perevodchik-s-anglijskogo-na-russkij.jpg" title="12" alt="Image preview..."/>
                                </a>
                        </li>
                        <li className="topJob">
                                <a href="/">
                                    <img  className="topJob" src="https://netoly.ru/wp-content/uploads/2020/02/perevodchik-s-anglijskogo-na-russkij.jpg" title="12" alt="Image preview..."/>
                                </a>
                        </li>
                        <li className="topJob">
                                <button>
                                    <img  className="topJob button" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Netvibes-icon.png" title="12" alt="Image preview..."/>
                                </button>
                        </li>
                    </ul>
                </div>
                <div className="blokEmploy">
                    <p className="blokEmploy">Выполненые:</p>
                    <ul className="topJob">
                        {this.state.num.map(data => (
                            <li className="topJob">
                                    <a href="/">
                                        <img  className="topJob" src="https://netoly.ru/wp-content/uploads/2020/02/perevodchik-s-anglijskogo-na-russkij.jpg" title={data} alt="Image preview..."/>
                                    </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

};