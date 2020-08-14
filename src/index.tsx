import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/errorBoundry';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);