import React, {Component} from 'react';

import './footer.css';
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    authDown = (press) => {
        this.setState({num: press})
    }
    render() {
        return (
            <div className="footerBlock">
                <ul className="footer">
                    <li className="footer"><p>&#169;Copyright. All rights reserved.</p></li>
                    <li className="footer"><p>VK</p></li>
                    <li className="footer"><p>Ответственность.</p></li>
                </ul>
            </div>
        )
    }

};