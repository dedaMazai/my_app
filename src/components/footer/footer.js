import React, {Component} from 'react';

import './footer.css';
export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        };
    }
    authDown = (press) => {
        this.setState({num: press})
    }
    render() {
        return (
            <ul className="footer">
                <li className="footer"><p>&#169;Copyright. All rights reserved.</p></li>
                <li className="footer"><p>VK</p></li>
                <li className="footer"><p>Ответственность.</p></li>
            </ul>
        )
    }

};