import React, {Component} from 'react';
import Auth from '../auth';
import MainPage from '../mainPage';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' exact component={Auth}/>
                <Route path = '/person' exact component={MainPage}/>
                <Route path = '/advisor_person' exact component={Auth}/>
                <Route path = '/advisor_advertising' exact component={Auth}/>
                <Route path = '/support' exact component={Auth}/>
                <Route path = '/chaudmin' exact component={Auth}/>
            </Switch>
        )
    }
}
