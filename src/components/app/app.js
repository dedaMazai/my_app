import React, {Component} from 'react';
import Auth from '../auth';
import Control from '../admin/control';
import ControlPerson from '../admin/controlPerson';
import controlReclama from '../admin/controlReclama';
import Support from '../admin/support';
import MainPage from '../mainPage';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' exact component={Auth}/>
                <Route path = '/person' exact component={MainPage}/>
                <Route path = '/advisor_person' exact component={ControlPerson}/>
                <Route path = '/advisor_advertising' exact component={controlReclama}/>
                <Route path = '/support' exact component={Support}/>
                <Route path = '/chaudmin' exact component={Control}/>
            </Switch>
        )
    }
}
