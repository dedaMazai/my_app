import React, {Component} from 'react';
import Routes from '../routes';

import './app.css';


function App () {
    const isAuthenticated = true;
    return (
        <Routes isAuthenticated={isAuthenticated}/>
    )
}

export default App