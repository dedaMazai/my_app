import React, {Component} from 'react';

import './footerJob.css';
export default class FooterJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: [1,2,3,4,5]
        };
    }
    render() {
        return (
            <div className="footerJob">
                <p className="topJob">Топ работадателей:</p>
                <ul className="topJob">
                    {this.state.num.map(data => (
                           <li className="topJob">
                                <a href="/">
                                    <img  className="topJob" src="https://ktonanovenkogo.ru/image/finik.jpg" title={data} alt="Image preview..."/>
                                </a>
                           </li>
                    ))}
                </ul>
            </div>
        )
    }

};